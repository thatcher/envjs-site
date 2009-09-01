<e4x>
	{extend("html/base.js")}
    <block id='main'>
            <div id='news' >
                <h3>news archives</h3>
                    
                        {_('.*', _$.news).map(function(index){
                            return {
                                div:{
                                    $class:'',
                                    $:[
                                        {h4:this.title},
                                        {strong:this.date},
                                        _.e4x(this.description)
                                    ]
                                }
                            };
                        }).e4x()}
                        
            </div>
    </block> 
</e4x> 
