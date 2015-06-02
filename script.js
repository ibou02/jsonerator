/**
  * Copyright reelyActive 2014-2015
  * We believe in an open Internet of Things
  */

  
var mymodule = angular.module("watch", []);

mymodule.controller("ctrl", function($scope) {
    $scope.person_ld = {
            "@context": {
            "schema": "http://schema.org/"
			},
           "@graph": [{
            "@id": "person",
			"@type": "schema:Person",
			}
			]
	
    }

	 
    $scope.person = {};
   
	  function changeKeyValue() {
      for (var key in $scope.person) {
            if ($scope.person.hasOwnProperty(key)) {
                if(!$scope.person[key].length){
                   delete $scope.person_ld["@graph"][0]["schema:" + key];
                } 
				
				  else {
                   $scope.person_ld["@graph"][0]["schema:" + key] = $scope.person[key];
                }
            }
        }
    }

	
    $scope.change = function () {
        changeKeyValue();
    }
})


mymodule.controller("main",function($scope) {
    $scope.jsonerator = true;
    $scope.jsonerator2 = false;
	$scope.jsonerator3 = false;
	
	
    $scope.person = function() {
        $scope.jsonerator = true;
        $scope.jsonerator2 = false;
		$scope.jsonerator3 = false;
		 }
	
	
	 $scope.product = function() {
        $scope.jsonerator = false;
        $scope.jsonerator2 = true;
		$scope.jsonerator3 = false;
		}
	
	
	 $scope.place = function() {
        $scope.jsonerator = false;
        $scope.jsonerator2 = false;
		$scope.jsonerator3 = true;
		   }
	
	 $scope.nationality= 'World';
  
  $scope.countries = [ 
    {nationality: 'Afghanistan', country_code: 'AF'},
    {nationality: 'Åland Islands', country_code: 'AX'},
    {nationality: 'Albania', country_code: 'AL'},
    {nationality: 'Algeria', country_code: 'DZ'},
    {nationality: 'American Samoa', country_code: 'AS'},
    {nationality: 'Andorra', country_code: 'AD'},
    {nationality: 'Angola', country_code: 'AO'},
    {nationality: 'Anguilla', country_code: 'AI'},
    {nationality: 'Antarctica', country_code: 'AQ'},
    {nationality: 'Antigua and Barbuda', country_code: 'AG'},
    {nationality: 'Argentina', country_code: 'AR'},
    {nationality: 'Armenia', country_code: 'AM'},
    {nationality: 'Aruba', country_code: 'AW'},
    {nationality: 'Australia', country_code: 'AU'},
    {nationality: 'Austria', country_code: 'AT'},
    {nationality: 'Azerbaijan', country_code: 'AZ'},
    {nationality: 'Bahamas', country_code: 'BS'},
    {nationality: 'Bahrain', country_code: 'BH'},
    {nationality: 'Bangladesh', country_code: 'BD'},
    {nationality: 'Barbados', country_code: 'BB'},
    {nationality: 'Belarus', country_code: 'BY'},
    {nationality: 'Belgium', country_code: 'BE'},
    {nationality: 'Belize', country_code: 'BZ'},
    {nationality: 'Benin', country_code: 'BJ'},
    {nationality: 'Bermuda', country_code: 'BM'},
    {nationality: 'Bhutan', country_code: 'BT'},
    {nationality: 'Bolivia', country_code: 'BO'},
    {nationality: 'Bosnia and Herzegovina', country_code: 'BA'},
    {nationality: 'Botswana', country_code: 'BW'},
    {nationality: 'Bouvet Island', country_code: 'BV'},
    {nationality: 'Brazil', country_code: 'BR'},
    {nationality: 'British Indian Ocean Territory', country_code: 'IO'},
    {nationality: 'Brunei Darussalam', country_code: 'BN'},
    {nationality: 'Bulgaria', country_code: 'BG'},
    {nationality: 'Burkina Faso', country_code: 'BF'},
    {nationality: 'Burundi', country_code: 'BI'},
    {nationality: 'Cambodia', country_code: 'KH'},
    {nationality: 'Cameroon', country_code: 'CM'},
    {nationality: 'Canada', country_code: 'CA'},
    {nationality: 'Cape Verde', country_code: 'CV'},
    {nationality: 'Cayman Islands', country_code: 'KY'},
    {nationality: 'Central African Republic', country_code: 'CF'},
    {nationality: 'Chad', country_code: 'TD'},
    {nationality: 'Chile', country_code: 'CL'},
    {nationality: 'China', country_code: 'CN'},
    {nationality: 'Christmas Island', country_code: 'CX'},
    {nationality: 'Cocos (Keeling) Islands', country_code: 'CC'},
    {nationality: 'Colombia', country_code: 'CO'},
    {nationality: 'Comoros', country_code: 'KM'},
    {nationality: 'Congo', country_code: 'CG'},
    {nationality: 'Congo, The Democratic Republic of the', country_code: 'CD'},
    {nationality: 'Cook Islands', country_code: 'CK'},
    {nationality: 'Costa Rica', country_code: 'CR'},
    {nationality: 'Cote D\'Ivoire', country_code: 'CI'},
    {nationality: 'Croatia', country_code: 'HR'},
    {nationality: 'Cuba', country_code: 'CU'},
    {nationality: 'Cyprus', country_code: 'CY'},
    {nationality: 'Czech Republic', country_code: 'CZ'},
    {nationality: 'Denmark', country_code: 'DK'},
    {nationality: 'Djibouti', country_code: 'DJ'},
    {nationality: 'Dominica', country_code: 'DM'},
    {nationality: 'Dominican Republic', country_code: 'DO'},
    {nationality: 'Ecuador', country_code: 'EC'},
    {nationality: 'Egypt', country_code: 'EG'},
    {nationality: 'El Salvador', country_code: 'SV'},
    {nationality: 'Equatorial Guinea', country_code: 'GQ'},
    {nationality: 'Eritrea', country_code: 'ER'},
    {nationality: 'Estonia', country_code: 'EE'},
    {nationality: 'Ethiopia', country_code: 'ET'},
    {nationality: 'Falkland Islands (Malvinas)', country_code: 'FK'},
    {nationality: 'Faroe Islands', country_code: 'FO'},
    {nationality: 'Fiji', country_code: 'FJ'},
    {nationality: 'Finland', country_code: 'FI'},
    {nationality: 'France', country_code: 'FR'},
    {nationality: 'French Guiana', country_code: 'GF'},
    {nationality: 'French Polynesia', country_code: 'PF'},
    {nationality: 'French Southern Territories', country_code: 'TF'},
    {nationality: 'Gabon', country_code: 'GA'},
    {nationality: 'Gambia', country_code: 'GM'},
    {nationality: 'Georgia', country_code: 'GE'},
    {nationality: 'Germany', country_code: 'DE'},
    {nationality: 'Ghana', country_code: 'GH'},
    {nationality: 'Gibraltar', country_code: 'GI'},
    {nationality: 'Greece', country_code: 'GR'},
    {nationality: 'Greenland', country_code: 'GL'},
    {nationality: 'Grenada', country_code: 'GD'},
    {nationality: 'Guadeloupe', country_code: 'GP'},
    {nationality: 'Guam', country_code: 'GU'},
    {nationality: 'Guatemala', country_code: 'GT'},
    {nationality: 'Guernsey', country_code: 'GG'},
    {nationality: 'Guinea', country_code: 'GN'},
    {nationality: 'Guinea-Bissau', country_code: 'GW'},
    {nationality: 'Guyana', country_code: 'GY'},
    {nationality: 'Haiti', country_code: 'HT'},
    {nationality: 'Heard Island and Mcdonald Islands', country_code: 'HM'},
    {nationality: 'Holy See (Vatican City State)', country_code: 'VA'},
    {nationality: 'Honduras', country_code: 'HN'},
    {nationality: 'Hong Kong', country_code: 'HK'},
    {nationality: 'Hungary', country_code: 'HU'},
    {nationality: 'Iceland', country_code: 'IS'},
    {nationality: 'India', country_code: 'IN'},
    {nationality: 'Indonesia', country_code: 'ID'},
    {nationality: 'Iran, Islamic Republic Of', country_code: 'IR'},
    {nationality: 'Iraq', country_code: 'IQ'},
    {nationality: 'Ireland', country_code: 'IE'},
    {nationality: 'Isle of Man', country_code: 'IM'},
    {nationality: 'Israel', country_code: 'IL'},
    {nationality: 'Italy', country_code: 'IT'},
    {nationality: 'Jamaica', country_code: 'JM'},
    {nationality: 'Japan', country_code: 'JP'},
    {nationality: 'Jersey', country_code: 'JE'},
    {nationality: 'Jordan', country_code: 'JO'},
    {nationality: 'Kazakhstan', country_code: 'KZ'},
    {nationality: 'Kenya', country_code: 'KE'},
    {nationality: 'Kiribati', country_code: 'KI'},
    {nationality: 'Korea, Democratic People\'s Republic of', country_code: 'KP'},
    {nationality: 'Korea, Republic of', country_code: 'KR'},
    {nationality: 'Kuwait', country_code: 'KW'},
    {nationality: 'Kyrgyzstan', country_code: 'KG'},
    {nationality: 'Lao People\'s Democratic Republic', country_code: 'LA'},
    {nationality: 'Latvia', country_code: 'LV'},
    {nationality: 'Lebanon', country_code: 'LB'},
    {nationality: 'Lesotho', country_code: 'LS'},
    {nationality: 'Liberia', country_code: 'LR'},
    {nationality: 'Libyan Arab Jamahiriya', country_code: 'LY'},
    {nationality: 'Liechtenstein', country_code: 'LI'},
    {nationality: 'Lithuania', country_code: 'LT'},
    {nationality: 'Luxembourg', country_code: 'LU'},
    {nationality: 'Macao', country_code: 'MO'},
    {nationality: 'Macedonia, The Former Yugoslav Republic of', country_code: 'MK'},
    {nationality: 'Madagascar', country_code: 'MG'},
    {nationality: 'Malawi', country_code: 'MW'},
    {nationality: 'Malaysia', country_code: 'MY'},
    {nationality: 'Maldives', country_code: 'MV'},
    {nationality: 'Mali', country_code: 'ML'},
    {nationality: 'Malta', country_code: 'MT'},
    {nationality: 'Marshall Islands', country_code: 'MH'},
    {nationality: 'Martinique', country_code: 'MQ'},
    {nationality: 'Mauritania', country_code: 'MR'},
    {nationality: 'Mauritius', country_code: 'MU'},
    {nationality: 'Mayotte', country_code: 'YT'},
    {nationality: 'Mexico', country_code: 'MX'},
    {nationality: 'Micronesia, Federated States of', country_code: 'FM'},
    {nationality: 'Moldova, Republic of', country_code: 'MD'},
    {nationality: 'Monaco', country_code: 'MC'},
    {nationality: 'Mongolia', country_code: 'MN'},
    {nationality: 'Montserrat', country_code: 'MS'},
    {nationality: 'Morocco', country_code: 'MA'},
    {nationality: 'Mozambique', country_code: 'MZ'},
    {nationality: 'Myanmar', country_code: 'MM'},
    {nationality: 'Namibia', country_code: 'NA'},
    {nationality: 'Nauru', country_code: 'NR'},
    {nationality: 'Nepal', country_code: 'NP'},
    {nationality: 'Netherlands', country_code: 'NL'},
    {nationality: 'Netherlands Antilles', country_code: 'AN'},
    {nationality: 'New Caledonia', country_code: 'NC'},
    {nationality: 'New Zealand', country_code: 'NZ'},
    {nationality: 'Nicaragua', country_code: 'NI'},
    {nationality: 'Niger', country_code: 'NE'},
    {nationality: 'Nigeria', country_code: 'NG'},
    {nationality: 'Niue', country_code: 'NU'},
    {nationality: 'Norfolk Island', country_code: 'NF'},
    {nationality: 'Northern Mariana Islands', country_code: 'MP'},
    {nationality: 'Norway', country_code: 'NO'},
    {nationality: 'Oman', country_code: 'OM'},
    {nationality: 'Pakistan', country_code: 'PK'},
    {nationality: 'Palau', country_code: 'PW'},
    {nationality: 'Palestinian Territory, Occupied', country_code: 'PS'},
    {nationality: 'Panama', country_code: 'PA'},
    {nationality: 'Papua New Guinea', country_code: 'PG'},
    {nationality: 'Paraguay', country_code: 'PY'},
    {nationality: 'Peru', country_code: 'PE'},
    {nationality: 'Philippines', country_code: 'PH'},
    {nationality: 'Pitcairn', country_code: 'PN'},
    {nationality: 'Poland', country_code: 'PL'},
    {nationality: 'Portugal', country_code: 'PT'},
    {nationality: 'Puerto Rico', country_code: 'PR'},
    {nationality: 'Qatar', country_code: 'QA'},
    {nationality: 'Reunion', country_code: 'RE'},
    {nationality: 'Romania', country_code: 'RO'},
    {nationality: 'Russian Federation', country_code: 'RU'},
    {nationality: 'Rwanda', country_code: 'RW'},
    {nationality: 'Saint Helena', country_code: 'SH'},
    {nationality: 'Saint Kitts and Nevis', country_code: 'KN'},
    {nationality: 'Saint Lucia', country_code: 'LC'},
    {nationality: 'Saint Pierre and Miquelon', country_code: 'PM'},
    {nationality: 'Saint Vincent and the Grenadines', country_code: 'VC'},
    {nationality: 'Samoa', country_code: 'WS'},
    {nationality: 'San Marino', country_code: 'SM'},
    {nationality: 'Sao Tome and Principe', country_code: 'ST'},
    {nationality: 'Saudi Arabia', country_code: 'SA'},
    {nationality: 'Senegal', country_code: 'SN'},
    {nationality: 'Serbia and Montenegro', country_code: 'CS'},
    {nationality: 'Seychelles', country_code: 'SC'},
    {nationality: 'Sierra Leone', country_code: 'SL'},
    {nationality: 'Singapore', country_code: 'SG'},
    {nationality: 'Slovakia', country_code: 'SK'},
    {nationality: 'Slovenia', country_code: 'SI'},
    {nationality: 'Solomon Islands', country_code: 'SB'},
    {nationality: 'Somalia', country_code: 'SO'},
    {nationality: 'South Africa', country_code: 'ZA'},
    {nationality: 'South Georgia and the South Sandwich Islands', country_code: 'GS'},
    {nationality: 'Spain', country_code: 'ES'},
    {nationality: 'Sri Lanka', country_code: 'LK'},
    {nationality: 'Sudan', country_code: 'SD'},
    {nationality: 'Surinationality', country_code: 'SR'},
    {nationality: 'Svalbard and Jan Mayen', country_code: 'SJ'},
    {nationality: 'Swaziland', country_code: 'SZ'},
    {nationality: 'Sweden', country_code: 'SE'},
    {nationality: 'Switzerland', country_code: 'CH'},
    {nationality: 'Syrian Arab Republic', country_code: 'SY'},
    {nationality: 'Taiwan, Province of China', country_code: 'TW'},
    {nationality: 'Tajikistan', country_code: 'TJ'},
    {nationality: 'Tanzania, United Republic of', country_code: 'TZ'},
    {nationality: 'Thailand', country_code: 'TH'},
    {nationality: 'Timor-Leste', country_code: 'TL'},
    {nationality: 'Togo', country_code: 'TG'},
    {nationality: 'Tokelau', country_code: 'TK'},
    {nationality: 'Tonga', country_code: 'TO'},
    {nationality: 'Trinidad and Tobago', country_code: 'TT'},
    {nationality: 'Tunisia', country_code: 'TN'},
    {nationality: 'Turkey', country_code: 'TR'},
    {nationality: 'Turkmenistan', country_code: 'TM'},
    {nationality: 'Turks and Caicos Islands', country_code: 'TC'},
    {nationality: 'Tuvalu', country_code: 'TV'},
    {nationality: 'Uganda', country_code: 'UG'},
    {nationality: 'Ukraine', country_code: 'UA'},
    {nationality: 'United Arab Emirates', country_code: 'AE'},
    {nationality: 'United Kingdom', country_code: 'GB'},
    {nationality: 'United States', country_code: 'US'},
    {nationality: 'United States Minor Outlying Islands', country_code: 'UM'},
    {nationality: 'Uruguay', country_code: 'UY'},
    {nationality: 'Uzbekistan', country_code: 'UZ'},
    {nationality: 'Vanuatu', country_code: 'VU'},
    {nationality: 'Venezuela', country_code: 'VE'},
    {nationality: 'Vietnam', country_code: 'VN'},
    {nationality: 'Virgin Islands, British', country_code: 'VG'},
    {nationality: 'Virgin Islands, U.S.', country_code: 'VI'},
    {nationality: 'Wallis and Futuna', country_code: 'WF'},
    {nationality: 'Western Sahara', country_code: 'EH'},
    {nationality: 'Yemen', country_code: 'YE'},
    {nationality: 'Zambia', country_code: 'ZM'},
    {nationality: 'Zimbabwe', country_code: 'ZW'}
  ];

	
	
})


mymodule.controller("ctrl2", function($scope) {
    $scope.product_ld = {
  "@context": {
    "schema": "http://schema.org/"
  },
  "@graph": [
    {
      "@id": "product",
      "@type": "schema:Product",
      "schema:manufacturer": {
        "@type": "schema.Organization"
             }
           }
           ]
}
  

    $scope.product = {};
   
	  function changeKeyValue() {
        for (var key in $scope.product) {
			if ($scope.product.hasOwnProperty(key)) {
                if(!$scope.product[key].length){
                                  
     				delete $scope.product_ld["@graph"][0]["schema:" + key];
				    delete $scope.product_ld["@graph"][0]['schema:manufacturer'][key];
		
         		}

							
				else if ($scope.product[key]== $scope.product.nationality){
				$scope.product_ld["@graph"][0]['schema:manufacturer'][key] = $scope.product[key];}
				
		
         		else if ($scope.product[key]== $scope.product.model ){
				$scope.product_ld["@graph"][0][ "schema:" + key] = $scope.product[key]; }
				
				
                else if ($scope.product[key]== $scope.product.logo ){
				$scope.product_ld["@graph"][0][ "schema:" + key] = $scope.product[key]; }
				
				
				 else if ($scope.product[key]== $scope.product.url ){
		   		$scope.product_ld["@graph"][0][ "schema:" + key] = $scope.product[key]; }
				
				
				 else if ($scope.product[key]== $scope.product.image ){
				$scope.product_ld["@graph"][0][ "schema:" + key] = $scope.product[key]; }
				
				
				}
            }
        }
    

    $scope.change = function () {
        changeKeyValue();
    }
})


mymodule.controller("ctrl3", function($scope) {
    $scope.place_ld = {
      "@context": {
         "schema": "http://schema.org/"
      },
      "@graph": [
        {
          "@id": "place",
          "@type": "schema:Place",
           "schema:address": {
            "@type": "schema.PostalAddress"
           }
        }
      ]
    }
	
	
    $scope.place = {};
   
	  function changeKeyValue() {

        for (var key in $scope.place) {
            if ($scope.place.hasOwnProperty(key)) {
          		if(!$scope.place[key].length){
					                   
				   delete $scope.place_ld["@graph"][0]["schema:" + key];
				   delete $scope.place_ld["@graph"] [0]['schema:address'][key];
				   
				   } 
				
				else if ($scope.place[key]== $scope.place.nationality){
				$scope.place_ld["@graph"][0]["schema:" + key] = $scope.place[key];}
				
				
				else if ($scope.place[key]== $scope.place.streetaddress){
				$scope.place_ld["@graph"][0]['schema:address'][key] = $scope.place[key];}
				
				
				else if ($scope.place[key]== $scope.place.addresslocality){
				$scope.place_ld["@graph"][0]['schema:address'][key] = $scope.place[key];}
				
				
				else if ($scope.place[key]== $scope.place.addressRegion){
				$scope.place_ld["@graph"][0]['schema:address'][key] = $scope.place[key];}
				
				
				else if ($scope.place[key]== $scope.place.postalcountry_code){
				$scope.place_ld["@graph"][0]['schema:address'][key] = $scope.place[key];}
				
				
				else if ($scope.place[key] == $scope.place.addressCountry){
				$scope.place_ld["@graph"][0]['schema:address'][key] = $scope.place[key];}
				
				
				else if ($scope.place[key]== $scope.place.logo){
				$scope.place_ld["@graph"][0]["schema:" + key] = $scope.place[key];}
				
				
				else if ($scope.place[key]== $scope.place.url){
				$scope.place_ld["@graph"][0]["schema:" + key] = $scope.place[key];}
				
				
				else if ($scope.place[key]== $scope.place.image){
				$scope.place_ld["@graph"][0][ "schema:" + key] = $scope.place[key];}
				
            }
        }
    }

	
    $scope.change = function () {
        changeKeyValue();
    }
});
	


