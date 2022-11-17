<h1>MS Teams templates<h1>

Please refer to the below mentioned github repo for the methods mentioned in the documentation

<h2>1. Password Template</h2>

<h3>Syntax<h3>
passwordTemplate(<string to be displayed>)

<h3>Usage<h3>
passwordTemplate("Please provide password")

For this template, we need to use a composite entity and the value will be available at context.entities.<entityName>.password.


2. Dropdown Template

Syntax
dropdownTemplate(<string to be displayed>,<placeholder text>,<options>)
Where options is an array of objects and each object is as follows
    <code>{
        "title" : "<title>",
        "payload" : "<payload>"
    }</code>

Usage
dropdownTemplate("Please choose option from below","select option",[{"title": "option1","payload": "option1"},{"title": "option2","payload": "option2"},{"title": "option3","payload": "option3"}])

For this template, we need to use a composite entity and the value will be available at context.entities.<entityName>.choice.


3. Button Template

Syntax
buttonTemplate(<string to be displayed>,<options>)
Where options is an array of objects and each object is as follows
    Button
        {
            "type" : "postback"
            "title" : "<title>",
            "payload" : "<payload>"
        }
    URL
        {
            "type" : "url"
            "title" : "<title>",
            "url" : "<URL>"
        }

Usage
buttonTemplate("buttons to test", [{"type": "postback", "title": "button1","payload": "b1"}, { "type": "postback", "title": "button2", "payload": "b2" }, { "type": "url", "title": "google", "url": "https://www.google.com" }, { "type": "postback", "title": "button3", "payload": "b3" }, { "type": "postback", "title": "button4", "payload": "b4" }, { "type": "postback", "title": "button5", "payload": "b5" }, { "type": "postback", "title": "button6", "payload": "b6" }, { "type": "postback", "title": "button7", "payload": "b7" }, { "type": "url", "title": "bots", "url": "https://bots.kore.ai" }, { "type": "postback", "title": "button8", "payload": "b8" }, { "type": "postback", "title": "button9", "payload": "b9" }, { "type": "postback", "title": "button10", "payload": "b10" }, { "type": "postback", "title": "button11", "payload": "b11" }, { "type": "url", "title": "youtube", "url": "https://www.youtube.com" }])))


4. Table Template
Syntax
tableTemplate(<string to be displayed>,<options>)
Where options is an object and has two keys i.e columns and rows
    {
        "columns" :[
        {
            "name" : "<cloumn 1 name>",
            "align" : "<left/center/right>" // optional
        }
    ]
    "rows" : [
            [{
                "text":<value>,
                "align" : ""<left/center/right>" //optional
            }]
        ]
    }
Usage
tableTemplate("Here are the ticket details",  {
    "columns": [
        {"name": "column1"},{"name": "column2","align": "center"},{"name": "column3","align": "right"}
    ],
    "rows": [
        [{ "text": "value11" }, { "text": "value12", "align": "center" }, { "text": "value13", "align": "right" }],
        [{ "text": "value21" }, { "text": "value22", "align": "center" }, { "text": "value23", "align": "right" }],
        [{ "text": "value31" }, { "text": "value32", "align": "center" }, { "text": "value33", "align": "right" }]
    ]
})


5. Image Template
Syntax
imageTemplate(<string to be displayed>, "image url")
Usage
imageTemplate("Here is the image","https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg")


6. Carousel Template

Syntax
tableTemplate(<string to be displayed>,<options>)
Where options is an array of objects and each object is as follows
{
	"Image_url" : "url" //optional
    "title": "<title>",
	"subtitle": "<subtitle>",
	"default_actions": [
        {
            "type" : "postback"
            "title" : "<title>",
            "payload" : "<payload>"
        }
        //or
        {
            "type" : "url"
            "title" : "<title>",
            "url" : "<URL>"
        }  
	] //optional
}

Usage
carouselTemplate("Here are the carousel items",[
    {
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg",
        "title": "Carouse1",
        "subtitle": "This is carousel1 template",
        "default_actions": [
            { "type": "postback", "title": "button1", "payload": "b1" },
            { "type": "url", "title": "google", "url": "https://www.google.com" }
        ]
    },
    {
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg",
        "title": "Carouse2",
        "subtitle": "This is carousel2 template",
        "default_actions": [
            { "type": "postback", "title": "button2", "payload": "b2" }
        ]
    },
    {
        "title": "Carouse1",
        "subtitle": "This is carousel3 template",
        "default_actions": [
            { "type": "postback", "title": "button3", "payload": "b3" },
            { "type": "url", "title": "google", "url": "https://www.google.com" }
        ]
    }
])


7. Multiselect Template

Syntax
multiSelectTemplate(<string to be displayed>,<options>)
Where options is an array of choices(strings)

Usage
multiSelectTemplate("Please choose choices from below",["User1","User2","User3","User4","User5"])

For this template, we need to use a composite entity and the value will be available at context.entities.<entityName>. The entity will contains object with the choices as keys. The selected keys value will be true and the remaining keys will be false.


8. Date Template

Syntax
dateTemplate(<string to be displayed>)

Usage
dateTemplate("Please choose the date from below")

For this template, we need to use a composite entity and the value will be available at context.entities.<entityName>.date.
