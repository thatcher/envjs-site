<e4x>
	{extend("html/base.js")}
    <block id='main'>
        <div id='artist'>
            <h3>
                <a href={$.env('root')+'artists'}>
                    &lt; artists
                </a>
            </h3>
            <div class='first column span-7 prepend-2 colborder'>
                <h4>{_$.artist.name}</h4>
                <img src={$.env('root')+'data/artists/'+_$.artist.id+'/thumb.jpg'} 
                     alt={_$.artist.name}  
                     height='150px'/>
                <strong>releases</strong>
                <ul>
                    {_('.*', _$.release).map(function(){
                        return {li:{
                            a:{
                                $href:$.env('root')+'release/'+this.release,
                                $:this.name
                            }
                        }};
                    }).e4x()}
                </ul>
            </div>
            <div class=' last column span-10'>
                {_$.artist.description} 
            </div>
        </div>
    </block> 
</e4x> 
