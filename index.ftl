<p>
  Hola,
  <strong>
    <#if (age> 18)>
      ${name}
      <#else>
        Usuario
    </#if>
  </strong>
</p>
<#list pets as pet>
  <article>
    ${pet.name} is ${pet.color}
  </article>
</#list>