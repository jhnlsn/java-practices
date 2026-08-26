plugins {
    java
    alias(libs.plugins.spring.boot)
    alias(libs.plugins.spring.dependency.management)
}

group = "com.example"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(libs.spring.boot.starter.web)
    implementation(libs.spring.boot.starter.validation)
    implementation(libs.spring.boot.starter.data.jpa)
    implementation(libs.flyway.core)
    runtimeOnly(libs.flyway.postgresql)
    runtimeOnly(libs.postgresql)

    // Testing playbook §3.1 — canonical test dependencies.
    // The test database is the production engine via Testcontainers; H2 is banned.
    testImplementation(libs.spring.boot.starter.test) {
        exclude(group = "org.mockito") // discourage reflexive mocking; re-add only if §6.3 applies
    }
    // §6.3 applies: mocking the use case (a port boundary) in @WebMvcTest slices.
    // Mockito returns explicitly and only for that; mocks of owned non-port classes stay banned.
    testImplementation(libs.mockito.core)
    testImplementation(libs.spring.boot.testcontainers)
    testImplementation(libs.testcontainers.junit.jupiter)
    testImplementation(libs.testcontainers.postgresql)
    testImplementation(libs.awaitility)
    testImplementation(libs.wiremock.standalone) // doubles for external HTTP only
    testImplementation(libs.assertj.core)
}

// Testing playbook §7.1 — split suites:
//   `test`            unit + slice tests, no containers, target < 30s locally
//   `integrationTest` classes matching *IT, Testcontainers, target < 10 min in CI
tasks.test {
    useJUnitPlatform()
    exclude("**/*IT.class")
}

val integrationTest = tasks.register<Test>("integrationTest") {
    group = "verification"
    description = "Runs Testcontainers-backed integration tests (classes matching *IT)."
    useJUnitPlatform()
    testClassesDirs = sourceSets.test.get().output.classesDirs
    classpath = sourceSets.test.get().runtimeClasspath
    include("**/*IT.class")
    shouldRunAfter(tasks.test)
}

tasks.check {
    dependsOn(integrationTest)
}
