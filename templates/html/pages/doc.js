<e4x>
    {extend("html/base.js")}
    <block id='main'>
        <div id='doc'>
            <h3>
                <a href={$.env('root')+'docs'}>
                    &lt; documentation
                </a>
            </h3>
            <div class=' column span-4 colborder'>
                <ul>
                {_('.*',_$.doc.options).map(function(index, value){
                    return {
                        li: {a:{$href:'#'+this.option, $:this.option}}
                    };
                }).e4x()}
                </ul> 
            </div>
            <div class='first column span-13'>
                <ul>
                {_('.*',_$.doc.options).map(function(index, value){
                    return {
                        li:{$:[
                            {hr:{$id:this.option}},
                            {h3:{$:this.option }},
                            _.e4x(this.description),
                        ]}
                    };
                }).e4x()}
                </ul> 
            </div>
            <div class='last column span-4'>
                <h4>
                    <strong>{_$.doc.label + ' ' + _$.doc.version}</strong>
                </h4>
                <img src={$.env('root')+(_$.doc.id=='guide'?'images/icon-green.png':'images/icon-brown.png')} 
                     alt={_$.doc.label}
                     height='150px'/>
                <strong>releases</strong>
                <ul>
                    {_('.*', _$.releases).map(function(){
                        return {li:{$:[
                            {a:{
                                $href:$.env('root')+'doc/'+_$.doc.id+'-'+this.id,
                                $:this.name
                            }},
                            '|',
                            {a:{
                                $href:$.env('root')+'release/'+this.id,
                                $: this.id
                            }}
                        ]}};
                    }).e4x()}
                </ul>
            </div>
        </div>
    </block> 
    <block id='script_extra'>
        <script type='text/javascript' src={$.env('root')+"scripts/doc.js"}>
            <!--
            /**
             *  allows the style link to serve as the hidden form submit
             */
            -->
        </script>
    </block>
</e4x> 
