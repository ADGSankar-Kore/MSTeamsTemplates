
<h1>MS Teams templates</h1>

Please refer to the below mentioned github repo for the methods mentioned in the documentation

<h2>1. Generic Template</h2>
<p>The generic template lets you allow you to design the UI in the https://adaptivecards.io/designer/ and the JSON that got generated can be passed to this function and will be automatically rendered.</p>
<h3>Syntax</h3>
<code>genericTemplate(&quot;adaptive card JSON object&quot;)</code>
<h3>Usage</h3>

<code>genericTemplate({&quot;type&quot;:&quot;AdaptiveCard&quot;,&quot;$schema&quot;:&quot;http://adaptivecards.io/schemas/adaptive-card.json","version":"1.2","body":[{"type":"TextBlock","text":"New TextBlock&quot;,&quot;wrap&quot;:true},{&quot;type&quot;:&quot;Image&quot;},{&quot;type&quot;:&quot;RichTextBlock&quot;,&quot;inlines&quot;:[{&quot;type&quot;:&quot;TextRun&quot;,&quot;text&quot;:&quot;New RichTextBlock&quot;}]},{&quot;type&quot;:&quot;FactSet&quot;,&quot;facts&quot;:[{&quot;title&quot;:&quot;Fact 1&quot;,&quot;value&quot;:&quot;Value 1&quot;},{&quot;title&quot;:&quot;Fact 2&quot;,&quot;value&quot;:&quot;Value 2&quot;}]},{&quot;type&quot;:&quot;Input.Time&quot;},{&quot;type&quot;:&quot;Input.ChoiceSet&quot;,&quot;choices&quot;:[{&quot;title&quot;:&quot;Choice 1&quot;,&quot;value&quot;:&quot;Choice 1&quot;},{&quot;title&quot;:&quot;Choice 2&quot;,&quot;value&quot;:&quot;Choice 2&quot;}],&quot;placeholder&quot;:&quot;Placeholder text&quot;}]})</code>


<h2>2. Password Template</h2>
<h3>Syntax</h3>
<code>passwordTemplate(&quot;string to be displayed&quot;)</code>
<h3>Usage</h3>

<code>passwordTemplate(&quot;Please provide password&quot;)</code>

For this template, we need to use a composite entity and the value will be available at context.entities.&lt;entityName&gt;.password.

<h2>3. Dropdown Template</h2>
<h3>Syntax</h3>
dropdownTemplate(&lt;string to be displayed&gt;,&lt;placeholder text&gt;,&lt;options&gt;)
Where options is an array of objects and each object is as follows
<code>{
    &quot;title&quot; : &quot;&lt;title&gt;&quot;,
    &quot;payload&quot; : &quot;&lt;payload&gt;&quot;
}</code>
<h3>Usage</h3>
<code>dropdownTemplate(&quot;Please choose option from below&quot;,&quot;select option&quot;,[{&quot;title&quot;: &quot;option1&quot;,&quot;payload&quot;: &quot;option1&quot;},{&quot;title&quot;: &quot;option2&quot;,&quot;payload&quot;: &quot;option2&quot;},{&quot;title&quot;: &quot;option3&quot;,&quot;payload&quot;: &quot;option3&quot;}])</code>

For this template, we need to use a composite entity and the value will be available at context.entities.&lt;entityName&gt;.choice.
<h2>4. Button Template</h2>
<h3>Syntax</h3>
<code>buttonTemplate(&lt;string to be displayed&gt;,&lt;options&gt;)</code>

Where options is an array of objects and each object is as follows
Button
<code>{
    &quot;type&quot; : &quot;postback&quot;
&quot;title&quot; : &quot;&lt;title&gt;&quot;,
&quot;payload&quot; : &quot;&lt;payload&gt;&quot;
}</code>
URL
<code>{
&quot;type&quot; : &quot;url&quot;
&quot;title&quot; : &quot;&lt;title&gt;&quot;,
&quot;url&quot; : &quot;&lt;URL&gt;&quot;
}</code>
<h3>Usage</h3>
<code>buttonTemplate(&quot;buttons to test&quot;, [{&quot;type&quot;: &quot;postback&quot;, &quot;title&quot;: &quot;button1&quot;,&quot;payload&quot;: &quot;b1&quot;}, { &quot;type&quot;: &quot;postback&quot;, &quot;title&quot;: &quot;button2&quot;, &quot;payload&quot;: &quot;b2&quot; }, { &quot;type&quot;: &quot;url&quot;, &quot;title&quot;: &quot;google&quot;, &quot;url&quot;: &quot;https://www.google.com&quot; }, { &quot;type&quot;: &quot;postback&quot;, &quot;title&quot;: &quot;button3&quot;, &quot;payload&quot;: &quot;b3&quot; }, { &quot;type&quot;: &quot;postback&quot;, &quot;title&quot;: &quot;button4&quot;, &quot;payload&quot;: &quot;b4&quot; }, { &quot;type&quot;: &quot;postback&quot;, &quot;title&quot;: &quot;button5&quot;, &quot;payload&quot;: &quot;b5&quot; }, { &quot;type&quot;: &quot;postback&quot;, &quot;title&quot;: &quot;button6&quot;, &quot;payload&quot;: &quot;b6&quot; }, { &quot;type&quot;: &quot;postback&quot;, &quot;title&quot;: &quot;button7&quot;, &quot;payload&quot;: &quot;b7&quot; }, { &quot;type&quot;: &quot;url&quot;, &quot;title&quot;: &quot;bots&quot;, &quot;url&quot;: &quot;https://bots.kore.ai&quot; }, { &quot;type&quot;: &quot;postback&quot;, &quot;title&quot;: &quot;button8&quot;, &quot;payload&quot;: &quot;b8&quot; }, { &quot;type&quot;: &quot;postback&quot;, &quot;title&quot;: &quot;button9&quot;, &quot;payload&quot;: &quot;b9&quot; }, { &quot;type&quot;: &quot;postback&quot;, &quot;title&quot;: &quot;button10&quot;, &quot;payload&quot;: &quot;b10&quot; }, { &quot;type&quot;: &quot;postback&quot;, &quot;title&quot;: &quot;button11&quot;, &quot;payload&quot;: &quot;b11&quot; }, { &quot;type&quot;: &quot;url&quot;, &quot;title&quot;: &quot;youtube&quot;, &quot;url&quot;: &quot;https://www.youtube.com&quot; }])))</code>

<h2>5. Table Template</h2>
<h3>Syntax</h3>
<code>tableTemplate(&lt;string to be displayed&gt;,&lt;options&gt;)</code>
Where options is an object and has two keys i.e columns and rows

<code>{&quot;columns&quot; :[{&quot;name&quot; : &quot;&lt;cloumn 1 name&gt;&quot;, &quot;align&quot; : &quot;&lt;left/center/right&gt;&quot; // optional}]
   &quot;rows&quot; : [[{&quot;text&quot;:&lt;value&gt;,&quot;align&quot; : &quot;&quot;&lt;left/center/right&gt;&quot; //optional }]]}</code>
<h3>Usage</h3>
<code>tableTemplate(&quot;Here are the ticket details&quot;,  {
    &quot;columns&quot;: [
        {&quot;name&quot;: &quot;column1&quot;},{&quot;name&quot;: &quot;column2&quot;,&quot;align&quot;: &quot;center&quot;},{&quot;name&quot;: &quot;column3&quot;,&quot;align&quot;: &quot;right&quot;}
    ],
    &quot;rows&quot;: [
        [{ &quot;text&quot;: &quot;value11&quot; }, { &quot;text&quot;: &quot;value12&quot;, &quot;align&quot;: &quot;center&quot; }, { &quot;text&quot;: &quot;value13&quot;, &quot;align&quot;: &quot;right&quot; }],
        [{ &quot;text&quot;: &quot;value21&quot; }, { &quot;text&quot;: &quot;value22&quot;, &quot;align&quot;: &quot;center&quot; }, { &quot;text&quot;: &quot;value23&quot;, &quot;align&quot;: &quot;right&quot; }],
        [{ &quot;text&quot;: &quot;value31&quot; }, { &quot;text&quot;: &quot;value32&quot;, &quot;align&quot;: &quot;center&quot; }, { &quot;text&quot;: &quot;value33&quot;, &quot;align&quot;: &quot;right&quot; }]
    ]
})</code>

<h2>6. Image Template</h2>
<h3>Syntax</h3>
<code>imageTemplate(&lt;string to be displayed&gt;, &quot;image url&quot;)</code>
<h3>Usage</h3>
<code>imageTemplate(&quot;Here is the image&quot;,&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg&quot;)</code>

<h2>7. Carousel Template</h2>
<h3>Syntax</h3>
<code>tableTemplate(&lt;string to be displayed&gt;,&lt;options&gt;)</code>
Where options is an array of objects and each object is as follows
<code>{
    &quot;image_url&quot; : &quot;url&quot;, //optional
&quot;title&quot;: &quot;&lt;title&gt;&quot;,
    &quot;subtitle&quot;: &quot;&lt;subtitle&gt;&quot;,
    &quot;default_actions&quot;: [
{
    &quot;type&quot; : &quot;postback&quot;
&quot;title&quot; : &quot;&lt;title&gt;&quot;,
&quot;payload&quot; : &quot;&lt;payload&gt;&quot;
}
//or
{
&quot;type&quot; : &quot;url&quot;
&quot;title&quot; : &quot;&lt;title&gt;&quot;,
&quot;url&quot; : &quot;&lt;URL&gt;&quot;
}  
    ] //optional
}</code>
<h3>Usage</h3>
<code>carouselTemplate(&quot;Here are the carousel items&quot;,[
    {
        &quot;image_url&quot;: &quot;https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg&quot;,
        &quot;title&quot;: &quot;Carouse1&quot;,
        &quot;subtitle&quot;: &quot;This is carousel1 template&quot;,
        &quot;default_actions&quot;: [
            { &quot;type&quot;: &quot;postback&quot;, &quot;title&quot;: &quot;button1&quot;, &quot;payload&quot;: &quot;b1&quot; },
            { &quot;type&quot;: &quot;url&quot;, &quot;title&quot;: &quot;google&quot;, &quot;url&quot;: &quot;https://www.google.com&quot; }
        ]
    },
    {
        &quot;image_url&quot;: &quot;https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg&quot;,
        &quot;title&quot;: &quot;Carouse2&quot;,
        &quot;subtitle&quot;: &quot;This is carousel2 template&quot;,
        &quot;default_actions&quot;: [
            { &quot;type&quot;: &quot;postback&quot;, &quot;title&quot;: &quot;button2&quot;, &quot;payload&quot;: &quot;b2&quot; }
        ]
    },
    {
        &quot;title&quot;: &quot;Carouse1&quot;,
        &quot;subtitle&quot;: &quot;This is carousel3 template&quot;,
        &quot;default_actions&quot;: [
            { &quot;type&quot;: &quot;postback&quot;, &quot;title&quot;: &quot;button3&quot;, &quot;payload&quot;: &quot;b3&quot; },
            { &quot;type&quot;: &quot;url&quot;, &quot;title&quot;: &quot;google&quot;, &quot;url&quot;: &quot;https://www.google.com&quot; }
        ]
    }
])</code>

<h2>8. Multiselect Template</h2>
<h3>Syntax</h3>
<code>multiSelectTemplate(&lt;string to be displayed&gt;,&lt;options&gt;)</code>

Where options is an array of choices(strings)
<h3>Usage</h3>
<code>multiSelectTemplate(&quot;Please choose choices from below&quot;,[&quot;User1&quot;,&quot;User2&quot;,&quot;User3&quot;,&quot;User4&quot;,&quot;User5&quot;])</code>

For this template, we need to use a composite entity and the value will be available at context.entities.&lt;entityName&gt;. The entity will contains object with the choices as keys. The selected keys value will be true and the remaining keys will be false.

<h2>9. Date Template</h2>
<h3>Syntax</h3>
<code>dateTemplate(&lt;string to be displayed&gt;)</code>
<h3>Usage</h3>
<code>dateTemplate(&quot;Please choose the date from below&quot;)</code>

For this template, we need to use a composite entity and the value will be available at context.entities.&lt;entityName&gt;.date.

<h2>10. List View Template1</h2>
<h3>Syntax</h3>
<code>listViewTemplate1(&lt;string to be displayed&gt;,&lt;options&gt;,&lt;number of items to be displayed on top&gt;,&lt;see more tex&gt;)</code>
Where options is an array of objects and each object is as follows
<code>{
&quot;title&quot;: &quot;&lt;title&gt;&quot;,
    &quot;subtitle&quot;: &quot;&lt;subtitle&gt;&quot;,
    &quot;default_actions&quot;: [
{
    &quot;type&quot; : &quot;postback&quot;
&quot;title&quot; : &quot;&lt;title&gt;&quot;,
&quot;payload&quot; : &quot;&lt;payload&gt;&quot;
}
//or
{
&quot;type&quot; : &quot;url&quot;
&quot;title&quot; : &quot;&lt;title&gt;&quot;,
&quot;url&quot; : &quot;&lt;URL&gt;&quot;
}  
    ] //optional
}</code>
<h3>Usage</h3>
<code>listViewTemplate1(&quot;list view template 1&quot;,
[{&quot;title&quot;:&quot;Carouse 0&quot;,&quot;subtitle&quot;:&quot;This is carousel 0 template&quot;,&quot;default_actions&quot;:[{&quot;type&quot;:&quot;postback&quot;,&quot;title&quot;:&quot;button0&quot;,&quot;payload&quot;:&quot;b0&quot;},{&quot;type&quot;:&quot;url&quot;,&quot;title&quot;:&quot;google&quot;,&quot;url&quot;:&quot;https://www.google.com&quot;}]},
{&quot;title&quot;:&quot;Carouse 1&quot;,&quot;subtitle&quot;:&quot;This is carousel 1 template&quot;,&quot;default_actions&quot;:[{&quot;type&quot;:&quot;postback&quot;,&quot;title&quot;:&quot;button1&quot;,&quot;payload&quot;:&quot;b1&quot;},{&quot;type&quot;:&quot;url&quot;,&quot;title&quot;:&quot;google&quot;,&quot;url&quot;:&quot;https://www.google.com&quot;}]},
{&quot;title&quot;:&quot;Carouse 2&quot;,&quot;subtitle&quot;:&quot;This is carousel 2 template&quot;,&quot;default_actions&quot;:[{&quot;type&quot;:&quot;postback&quot;,&quot;title&quot;:&quot;button2&quot;,&quot;payload&quot;:&quot;b2&quot;},{&quot;type&quot;:&quot;url&quot;,&quot;title&quot;:&quot;google&quot;,&quot;url&quot;:&quot;https://www.google.com&quot;}]},
{&quot;title&quot;:&quot;Carouse 3&quot;,&quot;subtitle&quot;:&quot;This is carousel 3 template&quot;,&quot;default_actions&quot;:[{&quot;type&quot;:&quot;postback&quot;,&quot;title&quot;:&quot;button3&quot;,&quot;payload&quot;:&quot;b3&quot;},{&quot;type&quot;:&quot;url&quot;,&quot;title&quot;:&quot;google&quot;,&quot;url&quot;:&quot;https://www.google.com&quot;}]},
{&quot;title&quot;:&quot;Carouse 4&quot;,&quot;subtitle&quot;:&quot;This is carousel 4 template&quot;,&quot;default_actions&quot;:[{&quot;type&quot;:&quot;postback&quot;,&quot;title&quot;:&quot;button4&quot;,&quot;payload&quot;:&quot;b4&quot;},{&quot;type&quot;:&quot;url&quot;,&quot;title&quot;:&quot;google&quot;,&quot;url&quot;:&quot;https://www.google.com&quot;}]}], 3, &quot;See More/Less&quot;)</code>

<h2>11. List View Template2</h2>
<h3>Syntax</h3>
<code>listViewTemplate2(&lt;string to be displayed&gt;,&lt;options&gt;,&lt;number of items to be displayed on top&gt;,&lt;see more tex&gt;)</code>
Where options is an array of objects and each object is as follows
<code>{
     &quot;image_url&quot; : &quot;url&quot;, //optional
&quot;title&quot;: &quot;&lt;title&gt;&quot;,
    &quot;subtitle&quot;: &quot;&lt;subtitle&gt;&quot;,
    &quot;default_actions&quot;: [
{
    &quot;type&quot; : &quot;postback&quot;
&quot;title&quot; : &quot;&lt;title&gt;&quot;,
&quot;payload&quot; : &quot;&lt;payload&gt;&quot;
}
//or
{
&quot;type&quot; : &quot;url&quot;
&quot;title&quot; : &quot;&lt;title&gt;&quot;,
&quot;url&quot; : &quot;&lt;URL&gt;&quot;
}  
    ] //optional
}</code>
<h3>Usage</h3>
<code>listViewTemplate2(&quot;list view template 2&quot;,[{&quot;image_url&quot;:&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg&quot;,&quot;title&quot;:&quot;Carouse 0&quot;,&quot;subtitle&quot;:&quot;This is carousel 0 template&quot;,&quot;default_actions&quot;:[{&quot;type&quot;:&quot;postback&quot;,&quot;title&quot;:&quot;button0&quot;,&quot;payload&quot;:&quot;b0&quot;},{&quot;type&quot;:&quot;url&quot;,&quot;title&quot;:&quot;google&quot;,&quot;url&quot;:&quot;https://www.google.com&quot;}]},{&quot;image_url&quot;:&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg&quot;,&quot;title&quot;:&quot;Carouse 1&quot;,&quot;subtitle&quot;:&quot;This is carousel 1 template&quot;,&quot;default_actions&quot;:[{&quot;type&quot;:&quot;postback&quot;,&quot;title&quot;:&quot;button1&quot;,&quot;payload&quot;:&quot;b1&quot;},{&quot;type&quot;:&quot;url&quot;,&quot;title&quot;:&quot;google&quot;,&quot;url&quot;:&quot;https://www.google.com&quot;}]},{&quot;image_url&quot;:&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg&quot;,&quot;title&quot;:&quot;Carouse 2&quot;,&quot;subtitle&quot;:&quot;This is carousel 2 template&quot;,&quot;default_actions&quot;:[{&quot;type&quot;:&quot;postback&quot;,&quot;title&quot;:&quot;button2&quot;,&quot;payload&quot;:&quot;b2&quot;},{&quot;type&quot;:&quot;url&quot;,&quot;title&quot;:&quot;google&quot;,&quot;url&quot;:&quot;https://www.google.com&quot;}]},{&quot;image_url&quot;:&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg&quot;,&quot;title&quot;:&quot;Carouse 3&quot;,&quot;subtitle&quot;:&quot;This is carousel 3 template&quot;,&quot;default_actions&quot;:[{&quot;type&quot;:&quot;postback&quot;,&quot;title&quot;:&quot;button3&quot;,&quot;payload&quot;:&quot;b3&quot;},{&quot;type&quot;:&quot;url&quot;,&quot;title&quot;:&quot;google&quot;,&quot;url&quot;:&quot;https://www.google.com&quot;}]},{&quot;image_url&quot;:&quot;https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Seattle_monorail01_2008-02-25.jpg/1024px-Seattle_monorail01_2008-02-25.jpg&quot;,&quot;title&quot;:&quot;Carouse 4&quot;,&quot;subtitle&quot;:&quot;This is carousel 4 template&quot;,&quot;default_actions&quot;:[{&quot;type&quot;:&quot;postback&quot;,&quot;title&quot;:&quot;button4&quot;,&quot;payload&quot;:&quot;b4&quot;},{&quot;type&quot;:&quot;url&quot;,&quot;title&quot;:&quot;google&quot;,&quot;url&quot;:&quot;https://www.google.com&quot;}]}], 3, &quot;See More/Less&quot;)</code>
