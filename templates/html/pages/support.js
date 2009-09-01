<e4x>
	{extend("html/base.js")}
    <block id='main'>
        <div class="span-16 column first">
            <div id='contact'>
                <h3>support</h3>
                <p>
                    If you have questions, need help, would like to submit a
                    bug report or small patch, or become an active contibutor  
                    of the Envjs project please join us on one of our forums.
                    {_.paragraph()}
                </p>
                <h3>license</h3>
                <p>
                    Envjs is currently available for use in all personal or 
                    commercial projects under both the 
                    <a title="http://github.com/thatcher/env-js/tree/master/src/licenses/MIT-LICENSE.txt" 
                        href="http://github.com/thatcher/env-js/tree/master/src/licenses/MIT-LICENSE.txt">
                        MIT License
                    </a> and the
                    <a title="http://github.com/thatcher/env-js/tree/master/src/licenses/GPL-LICENSE.txt" 
                        href="http://github.com/thatcher/env-js/tree/master/src/licenses/GPL-LICENSE.txt">
                        GPL License
                    </a>. 
                    This means that you can choose the license that best suits 
                    your project, and use it accordingly.
                </p>
                
                <h3>donate</h3>
                <p>
                    {_.paragraph()}
                </p>
            </div>
        </div>
        <div class="span-7 column last">
            <div id='mailing_list'>
                <h3 style='margin-top:20px;'>
                mailing list
                </h3>
                <p>
                    <img src={$.env('root')+'images/groups_logo_sm.gif'} 
                         alt='google groups'
                         style='float:right;'/>
                    If you have questions pertaining to how to use Envjs
                    please search our user group, subscribe, or just post
                    to our 
                    <a href='http://groups.google.com/group/envjs'>
                        Google Group
                    </a>. 
                </p>
                <h3>issue tracking</h3>
                <p>
                    <img src={$.env('root')+'images/lighthouseapp_logo_sm.png'} 
                         alt='lighthouseapp'
                         style='float:right;'/>
                    If you would like to report a bug, submit a patch, request
                    a new feature, or take a sneak peek at what's coming soon,
                    visit our issue tracking system at 
                    <a href='http://envjs.lighthouseapp.com/projects/21590-envjs/overview'>
                        Lighthouse
                    </a>. 
                </p>
                <h3>source code</h3>
                <p>
                    <img src={$.env('root')+'images/github_logo_sm.png'} 
                         alt='github'
                         style='float:right;'/>
                    If you would like to start playing with the source yourself,
                    contribute regulary, or fork till your heart's content,
                    check out our source control repository on 
                    <a href='http://github.com/thatcher/env-js/tree/master'>
                        Github
                    </a>. 
                </p>
				<h3>continous builds</h3>
                <p>
                    <img src={$.env('root')+'images/logo_interior_transparent.png'} 
                         alt='run code run'
                         style='float:right;'
						 width='140px'/>
                    Our commits are kept hoest thanks to continuosly tested builds 
					donated graciously by   
                    <a href='http://runcoderun.com/thatcher/env-js/'>
                        Run Code Run
                    </a>. 
                </p>
            </div>
         </div>
    </block> 
</e4x> 
