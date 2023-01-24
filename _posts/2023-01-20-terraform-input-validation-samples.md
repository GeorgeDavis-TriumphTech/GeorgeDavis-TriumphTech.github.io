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

<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Generic Validations
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {% for sample in site.data.tf-input-validation-samples %}

            {% if sample.provider == "generic" %}
                        
                {% highlight terraform %}   
                    # {{ sample.comment }}
                    variable "{{ sample.name }}" {
                        type = {{ sample.type }}
                        default = "{{ sample.default }}"
                        description = "{{ sample.description }}"
                        {% for validation_check in sample.condition %}
                        validation {
                            condition = {{ validation_check }}
                            error_message = "{{ sample.error_message }}"
                        }
                        {% endfor %}
                        sensitive = {{ sample.sensitive_text }}
                    }
                {% endhighlight %}

            {% endif %}

        {% endfor %}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        AWS
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {% for sample in site.data.tf-input-validation-samples %}

            {% if sample.provider == "aws" %}
                        
                {% highlight terraform %}   
                    # {{ sample.comment }}
                    variable "{{ sample.name }}" {
                        type = {{ sample.type }}
                        default = "{{ sample.default }}"
                        description = "{{ sample.description }}"
                        {% for validation_check in sample.condition %}
                        validation {
                            condition = {{ validation_check }}
                            error_message = "{{ sample.error_message }}"
                        }
                        {% endfor %}
                        sensitive = {{ sample.sensitive_text }}
                    }
                {% endhighlight %}

            {% endif %}

        {% endfor %}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Azure
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {% for sample in site.data.tf-input-validation-samples %}

            {% if sample.provider == "azurerm" %}
                        
                {% highlight terraform %}   
                    # {{ sample.comment }}
                    variable "{{ sample.name }}" {
                        type = {{ sample.type }}
                        default = "{{ sample.default }}"
                        description = "{{ sample.description }}"
                        {% for validation_check in sample.condition %}
                        validation {
                            condition = {{ validation_check }}
                            error_message = "{{ sample.error_message }}"
                        }
                        {% endfor %}
                        sensitive = {{ sample.sensitive_text }}
                    }
                {% endhighlight %}

            {% endif %}

        {% endfor %}
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Google
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {% for sample in site.data.tf-input-validation-samples %}

            {% if sample.provider == "google" %}
                        
                {% highlight terraform %}   
                    # {{ sample.comment }}
                    variable "{{ sample.name }}" {
                        type = {{ sample.type }}
                        default = "{{ sample.default }}"
                        description = "{{ sample.description }}"
                        {% for validation_check in sample.condition %}
                        validation {
                            condition = {{ validation_check }}
                            error_message = "{{ sample.error_message }}"
                        }
                        {% endfor %}
                        sensitive = {{ sample.sensitive_text }}
                    }
                {% endhighlight %}

            {% endif %}

        {% endfor %}
      </div>
    </div>
  </div>
</div>

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