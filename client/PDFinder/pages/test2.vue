<template>
<main>
    <input type="search" id="address" class="form-control" placeholder="Where are we going?" />

<p>Selected: <strong id="address-value">none</strong></p>
</main>
</template>

<script>
import places from "places.js";
export default {
    data(){
        return{
            map:{}
        }
    },

    mounted(){
         var placesAutocomplete = places({
        appId: "plFPLVQ7WWMW",
      apiKey: "3231339c0acfe22edb7686aac57eea2c",
    container: document.querySelector('#address')
  });

  var $address = document.querySelector('#address-value')
  placesAutocomplete.on('change', function(e) {
      console.log(e.suggestion)
    $address.textContent = e.suggestion.value
  });

  placesAutocomplete.on('clear', function() {
    $address.textContent = 'none';
  });
    }

}
</script>

<style>

</style>