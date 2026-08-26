package com.example.transfers.architecture;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;
import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noFields;
import static com.tngtech.archunit.library.Architectures.layeredArchitecture;
import static com.tngtech.archunit.library.dependencies.SlicesRuleDefinition.slices;

import org.springframework.beans.factory.annotation.Autowired;

import com.tngtech.archunit.core.importer.ImportOption;
import com.tngtech.archunit.junit.AnalyzeClasses;
import com.tngtech.archunit.junit.ArchTest;
import com.tngtech.archunit.lang.ArchRule;

/**
 * Development playbook §7 — structure rules that live only in a document
 * decay. These run with the fast unit suite; an architecture violation fails
 * the build exactly like a failing test.
 */
@AnalyzeClasses(packages = "com.example.transfers",
        importOptions = ImportOption.DoNotIncludeTests.class)
class ArchitectureTest {

    @ArchTest
    static final ArchRule domainIsFrameworkFree =
            noClasses().that().resideInAPackage("..domain..")
                    .should().dependOnClassesThat()
                    .resideInAnyPackage("org.springframework..", "jakarta.persistence..",
                            "com.fasterxml..");

    // Core principle #2 — dependencies point inward. Enforced, not aspirational.
    @ArchTest
    static final ArchRule dependenciesPointInward =
            layeredArchitecture().consideringOnlyDependenciesInLayers()
                    .layer("Domain").definedBy("..domain..")
                    .layer("Application").definedBy("..application..")
                    .layer("Adapters").definedBy("..adapter..")
                    .whereLayer("Adapters").mayNotBeAccessedByAnyLayer()
                    .whereLayer("Application").mayOnlyBeAccessedByLayers("Adapters")
                    .whereLayer("Domain").mayOnlyBeAccessedByLayers("Application", "Adapters");

    @ArchTest
    static final ArchRule adaptersDontTalkToEachOther =
            slices().matching("..adapter.(*)..").should().notDependOnEachOther();

    @ArchTest
    static final ArchRule noFieldInjection =
            noFields().should().beAnnotatedWith(Autowired.class);
}
