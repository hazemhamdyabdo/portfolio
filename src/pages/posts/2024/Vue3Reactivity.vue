<script setup lang="ts">
import PostLayout from "@/layout/PostLayout.vue";
</script>

<template>
  <PostLayout>
    <h2 second-head>
      Exploring the Brilliance of Vue 3's Reactivity System: A Comprehensive
      Guide - Part 1
    </h2>
    <h3 sub-head>what do we mean by reactivity?</h3>
    <p text-base>
      Today, frontend developers work with reactivity as a core concept. It's
      the automatic synchronization between the application state and the DOM.
      Changes in the state are immediately mirrored in the DOM, eliminating the
      need for manual handling. Simply update the state, and the framework takes
      care of the rest
    </p>
    <p>
      Simply put, the framework is handling this
      <em>
        "The price has been updated. Please refresh the DOM with the new price
        and ensure that any other variables dependent on this price are also
        updated accordingly."</em
      >
    </p>
    <img src="@/assets/reactive.webp" alt="image" />
    <h3 sub-head>Exploring Reactivity</h3>
    <p text-base>
      Let's consider this example. we have a product that has a
      <span class="tages">price</span> and a
      <span class="tages">quantity</span> and there's amother variable
      <span class="tages">totalPrice</span> that is being computed form
      <span class="tages">price</span> and <span class="tages">quantity</span>
    </p>
    <pre class="tages pt--4" text-lg>
    let product = {price = 20, quantity = 5}
    let totalPrice = product.price * product.quantity

    cosnole.log(totalPrice) // 100
    </pre>
    <p text-base>
      Now if we changed the price of the product, the total price doesn't get
      updated
    </p>
    <pre class="tages pt--4" text-lg>
    product.price = 30
    cosnole.log(totalPrice) // 100
    </pre>
    <p text-base>
      We need a way to say to our code
      <em>
        "Hey, <span class="tages">totalPrice</span> is depending on
        <span class="tages">price</span> and
        <span class="tages"> quantity</span>. Whenever any of them chaneg
        re-compute the <span class="tages">totalPrice</span>".
      </em>
    </p>
    <p text-base>
      Let's address the problem incrementally, building each step upon the
      previous one until we construct a complete
      <strong>reactivity system</strong>.
    </p>
    <p text-base>
      First of all, we can wrap the code that updates
      <span class="tages"> totalPrice</span>
      into a function <span class="tages">updateTotalPrice</span> and call it
      whenever needed.
    </p>
    <pre class="tages pt--4" text-lg>
    let product = {price = 20, quantity = 5}
    let totalPrice = product.price * product.quantity
    let updateTotalPrice = () => {
      totalPrice = product.price * product.quantity
      cosnole.log(totalPrice) // 100
    }
    product.price = 30
    updateTotalPrice() // now it returns 150
    </pre>
    <p text-base>
      Next, what we need to do is, call the
      <span class="tages"> updateTotalPrice</span>function whenever the
      <span class="tages">price</span> or
      <span class="tages">quantity</span> changes. But, calling it manually
      after every update is <strong>NOT practical</strong>, we need a wat to
      automatically know theat the value has changed and therefore call the
      <span class="tages">updateQuantity</span> function automatically. And here
      is where
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy?retiredLocale=ar"
        target="_blank"
        title="Javascript Proxy MDN"
      >
        Javascript Proxy</a
      >
      comes into play.
    </p>
    <h3 sub-head>
      Introducing JavaScript Proxy: A Powerful Tool for Dynamic Object
      Interception and Custom Behavior
    </h3>
    <em text-base>
      The <span class="tages"> Proxy</span> object enables you to create a proxy
      for another object, whiche can intercept and redefine fundamental
      operations for that object.- MDN description for the proxt object
    </em>
    <p text-base>
      Simply, <strong> JavaScript Proxy</strong> allows us to intercept the
      basic operations like <strong>getting</strong> a value or
      <strong>setting</strong> a value of an object. And applying whatever logic
      we need on each opreation.
    </p>
    <img src="@/assets/javascriptProxy.png" alt="Proxy" />
    <p text-base>The proxy constructor takes 2 parameters.</p>
    <ul>
      <li>
        <strong>Target:</strong> which is the original object that we need to
        Proxy
      </li>
      <li>
        <strong>Handler:</strong> an object that defines the intercepted
        operations and the logic that will be executed on them. it's can called
        also (traps)
      </li>
    </ul>
    <p text-base>
      <strong>Let's see it in action:</strong>We're going to create a proxy with
      an empty object handler, a proxy that is not doing anything. it will
      behave just like the original object
    </p>
    <pre class="tages pt--4" text-lg>
    let product = {price = 20, quantity = 5}
    let proxyProduct = new Proxy(product, {})

    cosnole.log(proxyProduct.price) // 20
    
    proxyProduct.price = 30
    cosnole.log(proxyProduct.price) // 30
    </pre>
    <p text-base>
      Now let's intercept the <strong>get</strong> and
      <strong>set</strong> functionalities (put some traps) and just add a
      <strong>log</strong>before getting or setting a value. This is done by
      implementing <span class="tages">get</span> and
      <span class="tages">set</span> functions in the
      <strong>handler object</strong>of the Proxy.
    </p>
    <ul>
      <li>
        <span class="tages">get</span> function: it's a trap for the get
        opreations on the object and takes 3 parameters:
        <ul>
          <li><strong>Tatget:</strong> The original object</li>
          <li>
            <strong>Property:</strong> The name of the property trying to get
            value of
          </li>
          <li>
            <strong>Receiver:</strong> The object that is trying to get the
            property from it value
          </li>
        </ul>
      </li>
      <li>
        <span class="tages">set</span>function: it's a trap for the set
        operation on the object and it takes 4 parameters:
        <ul>
          <li><strong>Target:</strong> The original object</li>
          <li>
            <strong>Property:</strong> The name of the property trying to set
            value of
          </li>
          <li>
            <strong>Value:</strong> The value that the property is trying to set
          </li>
          <li>
            <strong>Receiver:</strong> The object that is trying to set the
            property
          </li>
        </ul>
      </li>
    </ul>
    <pre class="tages pt--4" text-lg>
      let product = {price: 20, quantity: 5};
      let proxyProduct = new Proxy(product, {
        get(target, property, receiver) {
          console.log(`getting ${property} from ${receiver}`);
          return target[property];
        },
        set(target, property, value, receiver) {
          console.log(`setting ${property} to ${value} from ${receiver}`);
          target[property] = value;
          return true;
        }
      });

      console.log(proxyProduct.price);
      // Output: getting price from [object Object]
      // Output: 20

      proxyProduct.price = 30;
      console.log(proxyProduct.price);
      // Output: setting price to 30 from [object Object]
      // Output: 30
    </pre>
    <p text-base>
      Do you see it now? Initially, we sought a method to automatically detect
      changes in a property's value to trigger the
      <span class="tages">updateTotalPrice</span> function. Now that we've found
      what we were seeking, we can easily employ a Proxy with a setter to
      accomplish this.
    </p>
    <h2 second-head>Returning to Our Main Challenge</h2>
    <h3 third-head>
      Improvement 1: calling <span class="tages">updateTotalPrice</span>
      function inside the setter
    </h3>
    <p text-base>
      Last time we needed a way to say
      <em
        >"Hey, whenever <span class="tages">price</span> or
        <span class="tages">quantity</span> changes, call
        <span class="tages">updateTotalPrice</span> function"</em
      >. This seemed to be some sort of magic that a propery has changed, it is
      not magic anymore. We can simply call the
      <span class="tages">updateTotalPrice</span> function inside the
      <span class="tages">setter.</span>
    </p>
    <pre class="tages pt--4" text-lg>
    let product = {price:20 , quantity:5}
    let proxyProduct = new Proxy(product, {
      set(target, property, value, receiver){
        if(property === 'price' || property === 'quantity'){
          target[property] = value
          updateTotalPrice()
        }
        return true
      }
    })
    cosnole.log(totalPrice) // 100
    proxyProduct.price = 30
    // setting price to 30 from product
    // then, Set value to 30
    cosnole.log(totalPrice)
    // 150 🥳
    </pre>
    <p text-base>
      Before moving on, we must eliminate redundant calls to the
      <span class="tages"> updateTotalPrice </span> function for property
      changes. However, if the price remains the same (e.g., from 20 to 20), it
      doesn't trigger an update. Let's modify the code accordingly.
    </p>
    <pre class="tages pt--4" text-lg>
    let proxyProduct = new Proxy(product, {
      get(target, property, receiver){
        console.log(`getting ${property} from ${receiver}`)
        return target[property]
      }
      set(target, property, value, receiver){
        console.log(`setting ${property} to ${value} from ${receiver}`)
        let oldValue = target[property]
        target[property] = value
        if(oldValue !== value && (property === 'price' || property === 'quantity')){
          updateTotalPrice()
        }
        return true
      }
    })
    </pre>
    <h3 third-head><---------------- TO BE CONTINUED ------------------></h3>
  </PostLayout>
</template>

<style>
.pt--4 {
  padding-top: 1.4rem;
}
</style>
