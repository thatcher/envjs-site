<e4x>
	{extend("html/base.js")}
    <block id='main'>
            <div id='releases'>
                <h3>releases</h3>
                <div class='first column span-10 colborder'>
                    <ul>
                    
                        {_('.*', _$.releases).map(function(index){
                            return {li:{
                                div:{
                                    $class:'span-9 column',
                                    $:[
                                        {a:{
                                            $href:$.env('root')+'release/'+this.id,
                                            $:[{strong:this.name}]
                                        }},
                                        {br:{}},
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
                                        {div:{
                                            $class:'span-3 column',
                                            $:[
                                                'for more informations and downloads related to this release ',
                                                {a:{
                                                    $href:$.env('root')+'release/'+this.id,
                                                    $:'click here'
                                                }}
                                            ]
                                        }}
                                    ]
                                }
                                
                            }};
                        }).e4x()}
                        
                    </ul>
                </div>
                <div class='last column span-10'>
                    <ul>
                    
                        {_('.*', _$.releases).map(function(index){
                            return {li:{
                                div:{
                                    $class:'span-10',
                                    $:[
                                        {p:this.description}
                                    ]
                                }
                            }};
                        }).e4x()}

                    </ul>
                </div>
            </div>
    </block> 
</e4x> 
