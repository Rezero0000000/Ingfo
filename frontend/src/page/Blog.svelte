<script>
    import SearchInput from "../components/SearchInput.svelte";

    let count = [21,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
</script>
<SearchInput />
<div>
    <h1 class="pt-24 pb-24 text-4xl font-semibold text-center">Latest Post</h1>
    <div class="grid gap-2 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">

        {#each count as haha}
            <div class="w-[95%] md:mx-auto sm:mx-36">
                <div class="max-w-sm mb-5 rounded-lg ">
                    <div>
                        <img class="object-cover h-48 rounded-lg w-96" src="/image/1.png" alt="">
                    </div>
                    <div class="p-5 mt-3 bg-white border border-gray-200 shadow-md">
                        <div class="grid grid-cols-4 gap-4 mb-2">
                            <a href="/blog?category" class="py-1 text-sm text-center rounded-md bg-slate-200 text-slate-500">Shadow</a>
                        </div>
                        <a href="ss">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Shadow</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700">shadow</p>
                    </div>
                </div>
            </div>
        {/each}

    </div>
</div>