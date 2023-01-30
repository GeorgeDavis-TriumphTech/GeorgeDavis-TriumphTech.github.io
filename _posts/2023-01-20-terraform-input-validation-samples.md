---
layout: post-default
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

<span class="textH4">{{ page.title }}</span>

<div class="accordion padding20" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <img src="/img/terraform.svg" alt="Terraform" width="50" height="50" class="padding5 col-lg-1 col-md-2 col-sm-2 d-xs-none"/><span class="strongTextH5">Generic Validations</span>
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
      <button class="accordion-button collapsed aws-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <img src="/img/aws.svg" alt="Amazon Web Services" width="50" height="50" class="padding5 col-lg-1 col-md-2 col-sm-2 d-xs-none"/><span class="strongTextH5">Amazon Web Services</span>
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
      <button class="accordion-button collapsed azure-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <img src="/img/azure.svg" alt="Microsoft Azure" width="50" height="50" class="padding5 col-lg-1 col-md-2 col-sm-2 d-xs-none"/><span class="strongTextH5">Microsoft Azure</span>
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
      <button class="accordion-button collapsed gcp-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <img src="/img/gcp.svg" alt="Google Cloud Platform" width="50" height="50" class="padding5 col-lg-1 col-md-2 col-sm-2 d-xs-none"/><span class="strongTextH5">Google Cloud Platform</span>
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

<span class="textH4">Sources</span>

<ol>
  {% for ref in site.data.ref-tf-input-validation-samples %}

    {% if ref.type == 'source' %}

      <li><span class="textH5">{{ ref.title }}</span> - <a href="{{ ref.url }}" aria-label="{{ ref.type }}: {{ ref.title }}">{{ ref.url }}</a></li>

    {% endif %}

  {% endfor %}
</ol>

<span class="textH4">Knowledge Resources</span>
<ol>

  {% for ref in site.data.ref-tf-input-validation-samples %}

    {% if ref.type == 'tutorial' %}

      <li><span class="textH5">{{ ref.title }}</span> - <a href="{{ ref.url }}" aria-label="{{ ref.type }}: {{ ref.title }}">{{ ref.url }}</a></li>

    {% endif %}

  {% endfor %}
</ol>