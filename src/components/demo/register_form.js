const form_Details = [
    {
        "type":"title",
        "columns": 12,
        "id":"basic",
        "title":"Basic"
    },
    {
        "label": "First Name",
        "placeholder":"First Name",
        "id": "first_name",
        "columns": 4,
        "type": "text",
        "select": null,
    },
    {
        "label": "Last Name",
        "placeholder":"Last Name",
        "id": "last_name",
        "columns": 4,
        "type": "text",
        "select": null,
    },
    {
        "label": "Phone Number",
        "placeholder":"Phone Number",
        "id": "phone_number",
        "columns": 3,
        "type": "text",
        "select": null,
    },
    {
        "label": "Email",
        "placeholder":"Phone Number",
        "id": "email",
        "columns": 3,
        "type": "text",
        "select": null,
    },
    {
        "label": "Website",
        "placeholder":"Website",
        "id": "website",
        "columns": 3,
        "type": "text",
        "select": null,
    },
    {
        "label": "Address",
        "placeholder":"Address",
        "id": "address",
        "columns": 8,
        "type": "text",
        "select": null,
    },
    {
        "label": "Gender",
        "id": "gender",
        "columns": 4,
        "type": "select",
        "select": [
            "Male",
            "Female",
            "Intersex",
            "Shemale"
        ],
    },
    {
        "label": "Birthday",
        "placeholder":"Birthday",
        "id": "date_of_birth",
        "columns": 4,
        "type": "text",
        "select": null,
    },
    {
        "label": "Password",
        "id": "password",
        "columns": 4,
        "type": "password",
        "select": null,
    },

    {
        "type":"title",
        "columns": 12,
        "id":"education",
        "title":"Education"
    },
    {
        "label": "Country or distinct",
        "id": "country_distinct",
        "columns": 4,
        "type": "select",
        "select": [
            "HK"
        ],
    },
    {
        "label": "School",
        "id": "school",
        "columns": 4,
        "type": "select",
        "select": [
            "UST"
        ],
    },
    {
        "label": "Other Study Field",
        "id": "study_field",
        "columns": 8,
        "type": "text",
        "select": null,
    },


    {
        "type":"title",
        "columns": 12,
        "id":"experience",
        "title":"Experience"
    },
    {
        "label": "Company/organization name",
        "id": "company_organization",
        "columns": 4,
        "type": "text",
        "select": null,
    },
    {
        "label": "Position",
        "id": "position",
        "columns": 4,
        "type": "text",
        "select": null,
    },
    {
        "label": "Description (like your roles,projects...)",
        "id": "description",
        "columns": 8,
        "type": "text",
        "select": null,
    },


    {
        "type":"title",
        "columns": 12,
        "id": "titleInterest",
        "title":"Interests"
    },
    {
        "label": "Interests",
        "id": "interests",
        "columns": 8,
        "type": "multiselect",
        "select": [
            "Sports",
            "Cooking",
            "Write code",
            "Drawing",
            "Sleeping",
            "Freeride"
        ],
    },


    {
        "type":"title",
        "columns": 12,
        "id": "titleAbil",
        "title":"Abilities"
    },
    {
        "label": "Abilities",
        "id": "abilities",
        "columns": 8,
        "type": "select",
        "select": [
            "Master in JS"
        ],
    },
];



export default form_Details