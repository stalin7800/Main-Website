<script>
    import { info } from '../lib/datascienceprojects'
    import SampleProject from './SampleProject.svelte';
    
    import { fly, fade } from 'svelte/transition'

    
    
    export let cat
    let expanded = false, i=0

        function switchTab(dir) {
        console.log('clicked a thing')
        let len = cat.tabs.length
        if(dir=='left') {
            if(i==0) i = len-1
            else i -= 1
        }else {
            if(i==len-1) i=0
            else i += 1
        }
    }
</script>
<div class="interest">

    <h1>{cat.title}</h1>
    <p>{cat.gendesc} </p>
    <button on:click={() => {
        expanded = !expanded
    }}> { (expanded==false) ? 'Expand' : 'Minimize'} </button>

   

    {#if expanded}
        <div class="tabviewer" out:fly="{{y:-500, duration: 300}}" in:fly="{{y: -500, duration: 300}}">
            <p on:click={() => {

                if(i==0) i = cat.tabs.length-1
                else i -= 1
            }}>&larr;</p>
            <SampleProject tab={cat.tabs[i]}  />
            <p on:click={() => {
                if(i==cat.tabs.length-1) i=0
                else i += 1
            }}>&rarr;</p>
        </div>
    {/if}
  

</div>

<style>
    .interest {
        border: 1px dashed var(--col);
        border-radius: 5px;
        margin-top: 5em;
        color: var(--col);
        background-color: var(--bgc) ;
        padding: 1em;
    }
    button {
        cursor: pointer;
    }
    .interest > button {
        margin-inline: 50%;
        margin-bottom: 2.5em;
        background-color: green;
        padding: 1em;
        border: 1px solid var(--col);
        border-radius: 5px;
    }
 

    .tabviewer {
        display: flex;
        align-items: center;
    }
    .tabviewer > p {
        cursor: pointer;
        border: 1px solid var(--col);
        border-radius: 100%;
        aspect-ratio: 1;
        transition: all .5s ease-in;
        user-select: none;
    }
    .tabviewer > p:hover {
        background-color: lightblue;
    }
</style>


{#if expanded}
<style>
    .interest {
        height: 250%;
    }
</style>

{/if}