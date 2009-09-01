<e4x>
	{extend("html/base.js")}
    <block id='main'>
        <div id='docs'>
            <h3>documentation</h3>
            <div class='first column span-11 colborder '>
                <ul>
                
                    {_('.*', _$.docs).map(function(index){
                        return (index%2===0)?{li:{
                            a:{
                                $href:$.env('root')+'doc/'+this.id,
                                $:[
                                    {strong:this.label},
                                    {em:this.version},
                                    {img:{
                                        $src:$.env('root')+'images/icon-green.png',
                                        $alt:this.label,
                                        $height:'50px'
                                    }}
                                ]
                            }
                        }} : {};
                    }).e4x()}
                    
                </ul>
            </div>
            <div class=' last column  span-10'>
                <ul>
                    
                    {_('.*', _$.docs).map(function(index){
                        return (index%2===1)?{li:{
                            a:{
                                $href:$.env('root')+'doc/'+this.id,
                                $:[
                                    {img:{
                                        $src:$.env('root')+'images/icon-brown.png',
                                        $alt:this.label,
                                        $height:'50px'
                                    }},
                                    {strong:this.label},
                                    {em:this.version}
                                ]
                            }
                        }} : {};
                    }).e4x()}
                    
                </ul>
            </div>
        </div>
    </block> 
</e4x> 
