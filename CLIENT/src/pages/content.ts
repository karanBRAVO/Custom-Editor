export const CONTENT = `
<h1>Editor</h1>
<br>
<hr>
<ul>
  <li>
    This is item 1.
  </li>
  <li>
    This is item 2.
  </li>
</ul>
<hr>
<p>
  That’s a boring paragraph followed by a fenced code block:
</p>
<hr>
<pre><code>for (var i=1; i <= 20; i++)
{
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}</code></pre>
<p>
  Press Command/Ctrl + Enter to leave the fenced code block and continue typing in boring paragraphs.
</p>
<p>This is a basic example of implementing images. Drag to re-order.</p>
<img src="https://placehold.co/800x400" />
<img src="https://placehold.co/800x400/6A00F5/white" />
<p>
  I like lists. Let’s add one:
</p>
<ul>
  <li>This is a bullet list.</li>
  <li>And it has three list items.</li>
  <li>Here is the third one.</li>
</ul>
<p>
  Do you want to see one more? I bet! Here is another one:
</p>
<ol>
  <li>That’s a different list, actually it’s an ordered list.</li>
  <li>It also has three list items.</li>
  <li>And all of them are numbered.</li>
</ol>
<p>
  Lists would be nothing without list items.
</p>
<p>Hi everyone! Don’t forget the daily stand up at 8 AM.</p>
<p><span data-type="mention" data-id="Jennifer Grey"></span> Would you mind to share what you’ve been working on lately? We fear not much happened since Dirty Dancing.
<p><span data-type="mention" data-id="Winona Ryder"></span> <span data-type="mention" data-id="Axl Rose"></span> Let’s go through your most important points quickly.</p>
<p>I have a meeting with <span data-type="mention" data-id="Christina Applegate"></span> and don’t want to come late.</p>
<p>- Thanks, your big boss</p>
<ol>
  <li>A list item</li>
  <li>And another one</li>
</ol>

<ol start="5">
  <li>This item starts at 5</li>
  <li>And another one</li>
</ol>
<ul data-type="taskList">
  <li data-type="taskItem" data-checked="true">A list item</li>
  <li data-type="taskItem" data-checked="false">And another one</li>
</ul>
<p>Tiptap now supports YouTube embeds! Awesome!</p>
<div data-youtube-video>
  <iframe src="https://www.youtube.com/watch?v=3lTUAWOgoHs"></iframe>
</div>
<p>Try adding your own video to this editor!</p>
<p>This isn’t bold.</p>
<p><strong>This is bold.</strong></p>
<p><b>And this.</b></p>
<p style="font-weight: bold">This as well.</p>
<p style="font-weight: bolder">Oh, and this!</p>
<p style="font-weight: 500">Cool, isn’t it!?</p>
<p style="font-weight: 999">Up to font weight 999!!!</p>
<p>This isn’t code.</p>
<p><code>This is code.</code></p>
<p>This isn’t highlighted.</s></p>
<p><mark>But that one is.</mark></p>
<p><mark style="background-color: red;">And this is highlighted too, but in a different color.</mark></p>
<p><mark data-color="#ffa8a8">And this one has a data attribute.</mark></p>
<p>This isn’t italic.</p>
<p><em>This is italic.</em></p>
<p><i>And this.</i></p>
<p style="font-style: italic">This as well.</p>
<p>
  Wow, this editor has support for links to the whole <a href="https://en.wikipedia.org/wiki/World_Wide_Web">world wide web</a>. We tested a lot of URLs and I think you can add *every URL* you want. Isn’t that cool? Let’s try <a href="https://statamic.com/">another one!</a> Yep, seems to work.
</p>
<p>
  By default every link will get a <code>rel="noopener noreferrer nofollow"</code> attribute. It’s configurable though.
</p>
<p>This isn’t striked through.</s></p>
<p><s>But that’s striked through.</s></p>
<p><del>And this.</del></p>
<p><strike>This too.</strike></p>
<p style="text-decoration: line-through">This as well.</p>
<p>This is regular text.</p>
<p><sub>This is subscript.</sub></p>
<p><span style="vertical-align: sub">And this.</span></p>
<p>This is regular text.</p>
<p><sup>This is superscript.</sup></p>
<p><span style="vertical-align: super">And this.</span></p>
<p>There is no underline here.</p>
<p><u>This is underlined though.</u></p>
<p style="text-decoration: underline">And this as well.</p>
`;
