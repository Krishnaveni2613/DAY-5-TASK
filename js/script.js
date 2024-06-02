
Sample Resume in JSON Resume Format
sample-resume.json
{
  "basics": {
    "name": "krishnaveni",
    "email": "bvrnithi@gmail.com",
    "phone": "12345678",
    "degree": "B.Ed",
    "website": "Your website URL",
    "summary": "A one-sentence to one-paragraph overview text. Do not include any line-breaks.",
    "location": {
      "address": "Your street address or mailing address",
      "postalCode": "Your postal code (ZIP in the U.S.)",
      "city": "Your city",
      "countryCode": "Your country (e.g. USA)",
      "region": "Your region (state in the U.S.)"
    },
    "profiles": [
      {
        "network": "A social media or other profile that you would like to include (e.g. LinkedIn, Twitter)",
        "username": "Your username on this network",
        "url": "A URL to your user profile page"
      }
    ]
  },
  "work": [
    {
      "company": "Your employer name",
      "position": "Your job title",
      "website": "The URL for the employer's website",
      "startDate": "Your start date, in YYYY-MM-DD format",
      "endDate": "Your end date, in YYY-MM-DD format (leave blank for a current position)",
      "summary": "A one-sentence to one-paragraph summary of this employer or position",
      "highlights": [
        "Bullet-point list items that you would like to include along with (or instead of) a summary paragraph."
      ]
    }
  ],
  "volunteer": [
    {
      "organization": "Your volunteer organization name",
      "position": "Your job title",
      "website": "The URL for the employer's website",
      "startDate": "Your start date, in YYYY-MM-DD format",
      "endDate": "Your end date, in YYY-MM-DD format (leave blank for a current position)",
      "summary": "A one-sentence to one-paragraph summary of this employer or position",
      "highlights": [
        "Bullet-point list items that you would like to include along with (or instead of) a summary paragraph."
      ]
    }
  ],
  "education": [
    {
      "institution": "Your school name",
      "area": "Your area of study or degree earned",
      "studyType": "",
      "startDate": "Your start date, in YYYY-MM-DD format",
      "endDate": "Your completion date, in YYYY-MM-DD format",
      "gpa": "",
      "courses": [
        ""
      ]
    }
  ],
  
  "skills": [
    {
      "name": "A category of job skills (e.g. 'Programming Languages')",
      "level": "",
      "keywords": [
        "Keywords under this category (e.g. 'Java', 'C++', etc)"
      ]
    }
  ],
  "languages": [
    {
      "language": "Language name",
      "fluency": "Your language fluency"
    }
  ],
  "interests": [
    {
      "name": "A category of interests (e.g. 'Sports')",
      "keywords": [
        "Keywords under this category (e.g. 'Cricket', 'Football', 'Golf')"
      ]
    }
  ]
}




//QUESTION NO 2
// FOR THE ABOVE JSON,ITERATE, OVER ALL FOR LOOPS ( FOR, FOR IN,FOR OF, FOR EACH,)
var json = [{
  “id” : “veni”,
  “msg” : “For the given JSON iterate over all for loops (for, for in, for of, forEach)”,
  “task” : “zen portal task”,
  “mail”: “honeybeee@gmail.com”
  },
  {
  “id” : “subbu2”,
  “msg” : “For the given JSON iterate over all for loops (for, for in, for of, forEach)”,
  “task” : “zen portal task”,
  “mail”: "honeybeee@gmail.com”
  }];
  //for loop
  for(var i = 0; i < json.length; i++) {
  var obj = json[i];
  
  console.log(obj.id);
  console.log(obj.msg);
  console.log(obj.task);
  console.log(obj.mail);
  
  }
  //for Each
  json.forEach(function(obj) { console.log(obj.msg); });
  
  //for In
  for (var key in json) {
  if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].msg);
  
  }
  }
  //for Of
  let text = “”;
  for (let x of json[key].id) {
  text += x;
  }
  console.log(text);
  
  
  
  