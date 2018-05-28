/*To understand this binding, we have to understand the call-site: the location in code where a function is 
called (not where it's declared). We must inspect the call-site to answer the question: what's this "this" a 
reference to?

Finding the call-site is generally: "go locate where a function is called from", but it's not always that 
easy, as certain coding patterns can obscure the true call-site.

What's important is to think about the call-stack (the stack of functions that have been called to get us 
to the current moment in execution). The call-site we care about is in the invocation before the currently 
executing function.*/

function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope

    console.log( "baz" );
    bar(); // <-- call-site for `bar`
}

function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`

    console.log( "bar" );
    foo(); // <-- call-site for `foo`
}

function foo() {
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`

    console.log( "foo" );
}

baz(); // <-- call-site for `baz`