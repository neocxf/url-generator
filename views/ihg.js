module.exports = `
  <linkcenter>
    <baseuri>{{baseUri}}</baseuri>
    <contextPath>{{contextPath}}</contextPath>
    <additionalParam>{{additionalParam}}</additionalParam>
    
    <params include="true">
      <checkInDate>{{checkInDate}}</checkInDate>
      <checkOut>{{checkOut}}</checkOut>
      <adults>{{adults}}</adults>
      <rooms>{{rooms}}</rooms>
      <language>{{language}}</language>
      <party>
          <children>{{children}}</children>
          <adults>{{adult}}</adults>
      </party>
    </params>
    
  </linkcenter>
`;