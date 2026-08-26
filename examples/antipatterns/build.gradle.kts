plugins {
    `java-library`
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

// Everything in this module exists to be READ, not run. The "bad" test
// examples live in the MAIN source set so they compile on every build but no
// test runner ever executes them. The runnable good examples are the real
// code in examples/transfers.
dependencies {
    implementation(platform("org.springframework.boot:spring-boot-dependencies:${libs.versions.spring.boot.get()}"))
    implementation(libs.spring.boot.starter.web)
    implementation(libs.spring.boot.starter.data.jpa)
    implementation(libs.spring.boot.starter.test)
    implementation(libs.awaitility)
    implementation("org.mockito:mockito-core")
}
