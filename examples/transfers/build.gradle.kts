plugins {
    java
    alias(libs.plugins.spring.boot)
    alias(libs.plugins.spring.dependency.management)
    alias(libs.plugins.pitest)
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
    // Mockito ships with starter-test; WHAT may be mocked is governed by the
    // ArchUnit rule in architecture/MockUsageTest (adversarial review §6 —
    // governance by rule, not by dependency exclusion).
    testImplementation(libs.spring.boot.starter.test)
    testImplementation(libs.spring.boot.testcontainers)
    testImplementation(libs.testcontainers.junit.jupiter)
    testImplementation(libs.testcontainers.postgresql)
    testImplementation(libs.awaitility)
    testImplementation(libs.wiremock.standalone) // doubles for external HTTP only
    testImplementation(libs.assertj.core)
    testImplementation(libs.archunit.junit5) // dev playbook §7 — architecture rules run in the fast suite
}

// Testing playbook §7.2 amended by adversarial review §7: mutation testing on
// the domain only, reported as a trend — not a blocking PR gate. Domain tests
// are pure unit tests, which is exactly where PIT is fast and mutants matter.
pitest {
    pitestVersion = libs.versions.pitest.core.get()
    junit5PluginVersion = libs.versions.pitest.junit5.get()
    targetClasses = listOf("com.example.transfers.domain.*")
    targetTests = listOf("com.example.transfers.domain.*")
    timestampedReports = false
    outputFormats = listOf("HTML", "XML")
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
