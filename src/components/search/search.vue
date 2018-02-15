<template>
  <div>
    <div class="col-sm-8 col-xs-12 pull-left">
      <div class="search_form">
        <a href="index.html" class="logo hidden-xs"><img src="images/logo.svg" alt="logo"></a>
        <form>
          <div>
            <input id="searchbar" type="text" placeholder="What are you looking for?" class="form-control">
            <button><img src="images/search.svg" alt="search"></button>
            <img class="search_close" src="images/64-px-close.svg" alt="search">
          </div>
          <div class="autocomplete-suggestions" style="position: absolute; display: block; z-index: 9999; width: 100%;"></div>
        </form>
      </div>
    </div>
  </div>
</template>
