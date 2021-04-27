<products>
  {{#each this}}
  <product>
    <baseId>{{this.baseId}}</baseId>
    <isActive>{{this.isActive}}</isActive>
    <contentType>
      {{#each contentType}}
      <contentTypeValue>{{this.value}}</contentTypeValue>
      {{/each}}
  </contentType>
    <features>
      {{#each feature}}
      <feature>{{this}}</feature>
      {{/each}}
  </features>
    <searchTerms>
      {{#each searchTerms}}
      <searchTermValue>
        {{this}}
      </searchTermValue>
      {{/each}}
  </searchTerms>
    <childProducts>
      {{#each childProducts}}
      <baseId>
        {{this.baseId}}
      </baseId>
      <isActive>
        {{this.isActive}}
      </isActive>
      <features>
        {{#each feature}}
          <feature>{{this}}</feature>
        {{/each}}
      </features>
      <searchTerms>
        {{#each searchTerms}}
        <searchTermValue>
          {{this}}
        </searchTermValue>
        {{/each}}
    </searchTerms>
      {{/each}}
  </childProducts>
  </product>
  {{/each}}
</products>