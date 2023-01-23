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

{% highlight terraform %}
    length(var.image_id) > 4 && substr(var.image_id, 0, 4) == \"ami-\"
{% endhighlight %}

{% for sample in site.data.tf-input-validation-samples %}        

    ```terraform
    {{ sample.command }} #{{ sample.comment }}
    ```

{% endfor %}