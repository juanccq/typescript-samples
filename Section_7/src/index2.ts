function asyncOperation(value: string, shouldReject: boolean = false): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Async operation completed!');
      
      if(shouldReject) {
        reject(new Error('Error in async opration'))
      }
      else {
        resolve(value);
      }
    }, 1000);
  })
}

async function exampleAsyncFunction() {
  try {
    const result1 = await asyncOperation('Step 1');
    console.log(result1);
    
    const result2 = await asyncOperation('Step 2').then((result) => {
      console.log(`chained .the() methos ${result}`);
      return result.toUpperCase
    })

    console.log(result2);

    const result3 = await asyncOperation('step 3', true).catch((error) => {
      console.error(`Caught the error: ${error.message}`);
      return 'Handled the error in our catch block'
    })

    console.log(result3);
    
  } catch ( error ) {
    if(error instanceof Error) {
      console.error('Caught error in try block');
      
    }
  } finally {
    console.log('Final cleanup');
  }
}

exampleAsyncFunction();