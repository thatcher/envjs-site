<e4x>
	{extend("html/base.js")}
    <block id='main'>
        <div class="span-17 column first">
            <div id='welcome'>
                <h3>welcome</h3>
                <p>
                     Envjs is a simulated browser environment written
                     in javascript.  It was originally developed by 
                     <a href='http://ejohn.org' target='_new'>John Resig</a>
                     and discussed in his blog 
                     <a href='http://ejohn.org/blog/bringing-the-browser-to-the-server/'>here</a>.
                      Envjs is now supported by a community of
                     developers who all use Envjs as part of their own
                     open source projects.  
                </p>
            </div>
            <div id='recentnews' >
                <h3>recent <a href={$.env('root')+'news'}>news</a></h3>
                <ul class='roe_recent_news'>
                    {_('.*', _$.news).map(function(){
                        return {li: {
							div: {
								$class: 'clear',
								$: [{
									h4: {
										$: [this.title + '-', {
											em: this.date
										}]
									}
								}, _.e4x(this.description)]
							}
						}};
                    }).e4x()} 
                </ul>
                <a href={$.env('root')+'news'}>news archives</a>
            </div>
        </div>
        <div class="span-6 column last">
            <div id='newreleases'>
                <h3>recent <a href={$.env('root')+'releases'}>releases</a></h3>
                <ul>
                
                    {_('.*', _$.recent).map(function(){
                        return {li:{ $:[
                            {h3:{
                                a:{
                                    $href: $.env('root')+'release/'+this.id,
                                    $:this.name
                                }
                            }},
                            {a:{
                                $href:this.zip,
                                img:{ 
                                    $src:$.env('root')+'images/zip.jpg',
                                    $alt:'zip',
                                    $height:'70px'
                                }
                            }},
                            {a:{
                                $href:this.tar,
                                img:{ 
                                    $src:$.env('root')+'images/tar.jpg',
                                    $alt:'tar',
                                    $height:'70px'
                                }
                            }},
                            {p:_.e4x(this.description).text().toString().substring(0,128)+'...'}
                        ]}};
                    }).e4x()}

                 </ul>
            </div>
            <div id='upcomingevents'>
                <h3>upcoming <a href={$.env('root')+'events'}>events</a></h3>
                <p><em>click on an event for more information</em></p>
                <ul>
                
                    {_('.*', _$.events).map(function(){
                        return {li:{ $:[
                            {a:{
                                $href:this.url,
                                $target:'_new',
                                $:this.title
                            }},
                            {h4:this.date},
                            {a:{
                                $href:$.env('root')+'events',
                                img:{ 
                                    $src:$.env('root')+this.image,
                                    $alt:this.title + '  '+this.location,
                                    $title:this.title+'  '+this.location,
                                    $height:'60px'
                                }
                            }},
                            {h4:this.location},
                            _.e4x(this.description).text().toString().substring(0,128)+'...'
                        ]}};
                    }).e4x()}

                 </ul>
            </div> 
        </div> 
    </block> 
</e4x> 
