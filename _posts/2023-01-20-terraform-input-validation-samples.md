---
layout: default
title: "Terraform Input Validation Samples"
meta: "Terraform Input Validation Samples"
author: "George Davis"
category: "terraform"
date: "January 20, 2023"
status: "published"
priority: 0.3
changefreq: weekly
keywords: George Davis C, terraform, input validation
---

### {{ page.title }}

{% for sample in site.data.tf-input-validation-samples %}
                
    {% highlight terraform %}   
        # {{ sample.comment }}
        variable "{{ sample.name }}" {
            type = "{{ sample.type }}"
            description = "{{ sample.description }}"
            {% for validation_check in sample.condition %}
            validation {
                condition = "{{ validation_check }}"
                error_message = "{{ sample.error_message }}"
            }
            {% endfor %}
            sensitive = {{ sample.sensitive_text }}
        }
    {% endhighlight %}

{% endfor %}

### Sources

- Terraform: Variable validation with samples - [https://dev.to/drewmullen/terraform-variable-validation-with-samples-1ank](https://dev.to/drewmullen/terraform-variable-validation-with-samples-1ank)
- Terraform variable validation - [https://medium.com/codex/terraform-variable-validation-b9b3e7eddd79](https://medium.com/codex/terraform-variable-validation-b9b3e7eddd79)
- Terraform Variable Validation - [https://brendanthompson.com/posts/2021/12/terraform-variable-validation](https://brendanthompson.com/posts/2021/12/terraform-variable-validation)
- Performing Terraform Variables Validation (With Azure Examples) - [https://jeffbrown.tech/terraform-variables-validation/](https://jeffbrown.tech/terraform-variables-validation/)
- Custom Validation Rules for Variables in Terraform - [https://www.thorsten-hans.com/custom-validation-rules-for-variables-in-terraform/](https://www.thorsten-hans.com/custom-validation-rules-for-variables-in-terraform/)
- Input validation – claim back your time from Terraform! - [https://binx.io/2021/07/12/input-validation-claim-back-your-time-from-terraform/](https://binx.io/2021/07/12/input-validation-claim-back-your-time-from-terraform/)
- Terraform validate list object - [https://www.oasys.net/fragments/terraform-validate-list-object/](https://www.oasys.net/fragments/terraform-validate-list-object/)

### Knowledge Resources
- Terraform Input Variables with Validation Rules - [https://terraformguru.com/terraform-certification-using-azure-cloud/27-Input-Variables-Validation-Rules/](https://terraformguru.com/terraform-certification-using-azure-cloud/27-Input-Variables-Validation-Rules/)