module.exports = `
<linkcenter>
  <baseuri>{{baseUri}}</baseuri>
  <contextPath>{{contextPath}}</contextPath>
  <additionalParam>{{additionalParam}}</additionalParam>

  <params include="true">
    <checkIn>{{checkIn}}</checkIn>
    <checkIn>{{checkIn_Day}}</checkIn>
    <checkIn>{{checkIn}}</checkIn>
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