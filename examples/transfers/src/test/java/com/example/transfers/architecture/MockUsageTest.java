package com.example.transfers.architecture;

import static com.tngtech.archunit.core.domain.JavaClass.Predicates.resideInAnyPackage;
import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.fields;

import org.mockito.Mock;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import com.tngtech.archunit.core.importer.ImportOption;
import com.tngtech.archunit.junit.AnalyzeClasses;
import com.tngtech.archunit.junit.ArchTest;
import com.tngtech.archunit.lang.ArchRule;

/**
 * Adversarial review §6 — governance by rule, not by dependency graph:
 * Mockito stays on the classpath, and this rule scopes what it may touch.
 * Testing playbook §6.3: mock the port, never the adapter, never a peer —
 * doubles are allowed only for domain ports and for use cases (the driving
 * ports) when slicing the web layer.
 */
@AnalyzeClasses(packages = "com.example.transfers",
        importOptions = ImportOption.OnlyIncludeTests.class)
class MockUsageTest {

    @ArchTest
    static final ArchRule mocksOnlyAtPortBoundaries =
            fields().that().areAnnotatedWith(MockitoBean.class)
                    .or().areAnnotatedWith(Mock.class)
                    .should().haveRawType(
                            resideInAnyPackage("..domain.port..", "..application..")
                                    .as("a domain port or an application use case"));
}
