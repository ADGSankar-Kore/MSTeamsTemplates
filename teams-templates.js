var adaptiveCard = {
    "type": "message",
    "speak": "",
    "attachments": [{
        "contentType": "application/vnd.microsoft.card.adaptive",
        "content": {
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.2",
            "padding": "None"
        }
    }]
}


const passwordTemplate = (displayText = "") => {
    var body = [
        {
            "type": "ColumnSet",
            "columns": [
                {
                    "type": "Column",
                    "width": 2,
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": displayText,
                            "wrap": true
                        },
                        {
                            "type": "Container",
                            "items": [
                                {
                                    "type": "Input.Text",
                                    "id": "password",
                                    "style": "password",
                                    "placeholder": "xxxxxx"
                                }
                            ]
                        }
                    ]
                }
            ],
        }]
    var actions = [
        {
            "type": "Action.Submit",
            "title": "Submit"
        }
    ]
    adaptiveCard.attachments[0].content.body = body;
    adaptiveCard.attachments[0].content.actions = actions;
    return adaptiveCard;
}

// console.log(JSON.stringify(passwordTemplate("Please provide password")))

const dropdownTemplate = (displayText, placeholderText = "", choices = []) => {
    var body = []
    if (displayText) {
        body.push({
            "type": "TextBlock",
            "text": displayText,
            "wrap": true
        })
    }
    body.push({
        "type": "Input.ChoiceSet",
        "id": "choice",
        "placeholder": placeholderText
    })
    var choices = choices.map((item) => {
        return {
            "title": item.title,
            "value": item.payload
        }
    })
    body[1].choices = choices
    var actions = [
        {
            "type": "Action.Submit",
            "title": "Submit"
        }
    ]
    adaptiveCard.attachments[0].content.body = body;
    adaptiveCard.attachments[0].content.actions = actions;
    return adaptiveCard;
}

// console.log(JSON.stringify(dropdownTemplate("Please choose option from below","select option",[{"title": "option1","payload": "option1"},{"title": "option2","payload": "option2"},{"title": "option3","payload": "option3"}])))


const buttonTemplate = (displayText = "", options = []) => {
    var body = [{
        "type": "Container",
        "padding": "Default",
        "items": [{
            "type": "TextBlock",
            "size": "medium",
            "text": displayText,
            "wrap": true
        }]
    }]
    var container = {
        "type": "Container",
        "padding": {
            "top": "None",
            "bottom": "Default",
            "left": "Default",
            "right": "Default"
        },
        "items": [{
            "type": "ActionSet",
            "actions": []
        }]
    }

    for (let i = 0; i < options.length; i++) {
        if ((i !== 0) && (i % 6 === 0)) {
            body.push(JSON.parse(JSON.stringify(container)));
            container.items[0].actions = []
        }
        if (options[i].type === "url") {
            container.items[0].actions.push({
                "type": "Action.OpenUrl",
                "title": options[i].title,
                "url": options[i].url
            })
        } else {
            container.items[0].actions.push({
                "type": "Action.Submit",
                "title": options[i].title,
                "data": {
                    "msteams": {
                        "type": "messageBack",
                        "displayText": options[i].title,
                        "text": options[i].payload
                    }
                }
            })
        }
    }

    if (container.items[0].actions.length > 0) {
        body.push(container);
    }
    adaptiveCard.attachments[0].content.body = body;
    return adaptiveCard;
}

// console.log(JSON.stringify(buttonTemplate("buttons to test", [{"type": "postback", "title": "button1","payload": "b1"}, { "type": "postback", "title": "button2", "payload": "b2" }, { "type": "url", "title": "google", "url": "https://www.google.com" }, { "type": "postback", "title": "button3", "payload": "b3" }, { "type": "postback", "title": "button4", "payload": "b4" }, { "type": "postback", "title": "button5", "payload": "b5" }, { "type": "postback", "title": "button6", "payload": "b6" }, { "type": "postback", "title": "button7", "payload": "b7" }, { "type": "url", "title": "bots", "url": "https://bots.kore.ai" }, { "type": "postback", "title": "button8", "payload": "b8" }, { "type": "postback", "title": "button9", "payload": "b9" }, { "type": "postback", "title": "button10", "payload": "b10" }, { "type": "postback", "title": "button11", "payload": "b11" }, { "type": "url", "title": "youtube", "url": "https://www.youtube.com" }])))


const tableTemplate = (displayText, data = []) => {
    var body = [
        {
            "type": "TextBlock",
            "text": displayText,
            "wrap": true
        },
        {
            "type": "ColumnSet",
            "columns": []
        }
    ]

    var columns = data.columns;

    columns.forEach(columnDetails => {
        var column = {
            "type": "Column",
            "items": []
        }
        column.items.push({
            "type": "TextBlock",
            "weight": "Bolder",
            "text": columnDetails.name,
            "horizontalAlignment": columnDetails.align ? columnDetails.align : "left"
        })
        body[1].columns.push(column);
    })

    data.rows.forEach((row, index1) => {
        body[1].columns.forEach((column, index2) => {
            body[1].columns[index2].items.push({
                "type": "TextBlock",
                "text": row[index2] && row[index2].text ? row[index2].text : "",
                "horizontalAlignment": row[index2] && row[index2].align ? row[index2].align : "left",
                "separator": true
            })

        })

    })

    adaptiveCard.attachments[0].content.body = body;
    return adaptiveCard;
}

var table = {
    "columns": [
        { "name": "column1" }, { "name": "column2", "align": "center" }, { "name": "column3", "align": "right" }
    ],
    "rows": [
        [{ "text": "value11" }, { "text": "value12", "align": "center" }, { "text": "value13", "align": "right" }],
        [{ "text": "value21" }, { "text": "value22", "align": "center" }, { "text": "value23", "align": "right" }],
        [{ "text": "value31" }, { "text": "value32", "align": "center" }, { "text": "value33", "align": "right" }]
    ]
}

// console.log(JSON.stringify(tableTemplate("Here are the ticket details", table)))

const imageTemplate = (displayText, url) => {
    var body = [
        {
            "type": "TextBlock",
            "text": displayText,
            "wrap": true
        },
        {
            "type": "Image",
            "url": url
        }
    ]
    adaptiveCard.attachments[0].content.body = body;
    return adaptiveCard;
}

//console.log(JSON.stringify(imageTemplate("Here is the image","https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg")))


const carouselTemplate = (displayText, data = []) => {
    adaptiveCard.attachments = []
    adaptiveCard.attachmentLayout = "carousel"
    adaptiveCard.text = displayText;
    //carousel in ms team supports 10 cards only so we are discarding the elements > 10
    var length = data.length <= 10 ? data.length : 10;
    for (var i = 0; i < length; i++) {
        var contentObj = {
            "contentType": "application/vnd.microsoft.card.adaptive",
            "content": {
                "type": "AdaptiveCard",
                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                "version": "1.2",
                "padding": "None"
            }
        }
        var body = [{
            "type": "Container",
            "items": []
        }]
        var actions = []
        if (data[i].title) {
            body[0].items.push({
                "type": "TextBlock",
                "size": "Large",
                "weight": "Bolder",
                "text": data[i].title,
                "separator": true
            })
        }
        if (data[0].image_url) {
            body[0].items.push({
                "type": "Image",
                "url": data[i].image_url
            })
        }
        if (data[0].subtitle) {
            body[0].items.push({
                "type": "TextBlock",
                "text": data[i].subtitle,
                "wrap": true,
                "separator": true
            })
        }
        if (data[i].default_actions) {
            data[i].default_actions.forEach(action => {
                if (action.type === "url") {
                    actions.push({
                        "type": "Action.OpenUrl",
                        "title": action.title,
                        "url": action.url
                    })
                } else {
                    actions.push({
                        "type": "Action.Submit",
                        "title": action.title,
                        "data": {
                            "msteams": {
                                "type": "messageBack",
                                "displayText": action.title,
                                "text": action.payload
                            }
                        }
                    })
                }
            })
        }
        contentObj.content.body = body;
        contentObj.content.actions = actions;
        adaptiveCard.attachments.push(contentObj);
    }
    return adaptiveCard;
}


var data = [
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
]

// console.log(JSON.stringify(carouselTemplate("Here are the carousel items",data)))

const multiSelectTemplate = (displayText, options) => {

    var body = [{
        "type": "TextBlock",
        "text": displayText,
        "wrap": true
    }]
    options.forEach(opt => {
        body.push({
            "type": "Input.Toggle",
            "title": opt,
            "id": opt
        })
    })
    var actions = [
        {
            "type": "Action.Submit",
            "title": "Submit"
        }
    ]
    adaptiveCard.attachments[0].content.body = body;
    adaptiveCard.attachments[0].content.actions = actions;
    return adaptiveCard;
}

// console.log(JSON.stringify(multiSelectTemplate("Please choose choices from below", ["User1", "User2", "User3", "User4", "User5"])))

const dateTemplate = (displayText) => {
    var body = [{
        "type": "TextBlock",
        "text": displayText,
        "wrap": true
    },
    {
        "type": "Input.Date",
        "id": "date"
    }]
    var actions = [
        {
            "type": "Action.Submit",
            "title": "Submit"
        }
    ]
    adaptiveCard.attachments[0].content.body = body;
    adaptiveCard.attachments[0].content.actions = actions;
    return adaptiveCard;
}

// console.log(JSON.stringify(dateTemplate("Please choose the date from below")))

const listViewTemplate1 = (displayText, data = [], topItemsCount, showMoreText) => {
    var length = data.length;
    var body = [{
        "type": "TextBlock",
        "text": displayText,
        "wrap": true
    }]
    if (length > topItemsCount) {
        adaptiveCard.attachments[0].content.actions = [{
            "type": "Action.ToggleVisibility",
            "title": showMoreText,
            "targetElements": [],
            "separator": true
        }]
    }
    for (var i = 0; i < length; i++) {
        var isVisible = true;
        if (i >= topItemsCount) {
            isVisible = false;
            adaptiveCard.attachments[0].content.actions[0].targetElements.push("idx" + i);
        }
        var elements = {
            "type": "ColumnSet",
            "isVisible": isVisible,
            "id": "idx" + i,
            "columns": [],
            "separator": true,
            "spacing": "Large"
        }
        var column = {
            "type": "Column",
            "items": []
        }
        if (data[i].title) {
            column.items.push({
                "type": "TextBlock",
                "size": "Large",
                "weight": "Bolder",
                "text": data[i].title,
                "wrap": true
            })
        }
        if (data[i].subtitle) {
            column.items.push({
                "type": "TextBlock",
                "text": data[i].subtitle,
                "wrap": true,
                "separator": true
            })
        }

        var actionsSet = {
            "type": "ActionSet",
            "actions" : []
        }
        if (data[i].default_actions) {
            data[i].default_actions.forEach(action => {
                if (action.type === "url") {
                    actionsSet.actions.push({
                        "type": "Action.OpenUrl",
                        "title": action.title,
                        "url": action.url
                    })
                } else {
                    actionsSet.actions.push({
                        "type": "Action.Submit",
                        "title": action.title,
                        "data": {
                            "msteams": {
                                "type": "messageBack",
                                "displayText": action.title,
                                "text": action.payload
                            }
                        }
                    })
                }
            })
        }
        column.items.push(actionsSet);
        elements.columns.push(column);
        body.push(elements)
    }
    adaptiveCard.attachments[0].content.body = body;
    return adaptiveCard;
}

var data = []
for (var i = 0; i < 5; i++) {
    data.push(
        {
            // "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg",
            "title": "Carouse " + i,
            "subtitle": `This is carousel ${i} template`,
            "default_actions": [
                { "type": "postback", "title": "button" + i, "payload": "b" + i },
                { "type": "url", "title": "google", "url": "https://www.google.com" }
            ]
        }
    )
}
// console.log(JSON.stringify(data))
// console.log(JSON.stringify(listViewTemplate1("list view template 1", data, 3, "See More/Less")))