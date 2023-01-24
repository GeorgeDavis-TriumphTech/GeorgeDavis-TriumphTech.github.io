<script>
  var codeBlocks = document.querySelectorAll('pre code');

  codeBlocks.forEach((codeBlock, index) => {
    // console.log(`The index for ${codeBlock} is ${index}`)
    let copyButton = document.createElement('button');
    copyButton.id = index;
    copyButton.className = 'copy btn btn-primary';
    copyButton.type = 'button';
    copyButton.ariaLabel = 'Copy code to clipboard';
    copyButton.innerText = 'Copy';

    copyButton.addEventListener('click', function (e) {
      // Retrieve id from clicked element
      let elementId = e.target.id;      
      let code = codeBlocks[elementId].innerText.trim();      
      code.slice(0,-4);
      window.navigator.clipboard.writeText(code);

      copyButton.innerText = 'Copied';

      setTimeout(function () {
        copyButton.innerText = 'Copy'
      }, 4000);
    });

    codeBlock.append(copyButton);
  });
</script>