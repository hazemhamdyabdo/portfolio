<script setup lang="ts">
import PostLayout from "@/layout/PostLayout.vue";
</script>

<template>
  <PostLayout>
    <h2 second-head>
      Vue 3 Reactivity System Is Brilliant! Here’s How It Works - Part 1
    </h2>
    <h3 sub-head>what do we mean by reactivity?</h3>
    <p text-base>
      Being a frontend developer nowadays means that you're dealing with
      reactivity on a daily basis. Basically, it is the seamless mapping between
      the application state and the DOM. Any change in the application state
      will instantly be reflected on the DOM without the need to handle this
      Manually, just change the state and let the framework do the rest of the
      work for you.
    </p>
    <p>
      Simply put, the framework is handling this
      <em>
        "Oh! the price has changed, update the DOM with the new price and update
        any other variables that are depending on this price too."</em
      >
    </p>
    <img src="@/assets/image1.png" alt="image" />
    <h3 sub-head>
      Reactivity Hello World! What Problem We’re Trying to Solve?
    </h3>
    <p text-base>
      Let's consider this example. we have a product that has a
      <span class="tages">price</span> and a
      <span class="tages"> quantity</span> and there's amother variable
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
      Let's tackle the proble, step by step, each step will be built above the
      previous step until we build a whole <strong> reactivty system</strong> at
      the end.
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
    <h3 sub-head>introducing Javascript Proxy</h3>
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
    <img src="@/assets/image.png" alt="Proxy" />
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
    let product = {price:20 , quantity:5}
    let proxyProduct = new Proxy(product, {
      get(target, property, receiver){
        console.log(`getting ${property} from ${receiver}`)
        return target[property] 
      },
      set(target, property, value, receiver){
        console.log(`setting ${property} to ${value} from ${receiver}`)
        target[property] = value
        return true
      }
    })
    cosnole.log(proxyProduct.price) 
    // getting price from product 
    // then, returns 20

    proxyProduct.price = 30
    cosnole.log(proxyProduct.price) 
    // setting price to 30 from product
    // then, Set value to 30
    </pre>
    <p text-base>
      Can you see it now? 🤔 At first we were looking for a way to automatically
      detect that a property's value has changed to call the
      <span class="tages"> updateTotalPrice</span> function. Now, that we have
      what we were looking for we can simply use a Proxy with a setter to
      achieve that
    </p>
    <h2 second-head>Back to Or Main Problem</h2>
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
      Just before leaving this point, we don't need redundant
      <span class="tages">updateTotalPrice</span> function for any chang happen
      in the property but what if we change the price form 20 to 20 also then it
      not updated so we don't need to recall function. Therefore, we're going to
      change the code a little bit
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
