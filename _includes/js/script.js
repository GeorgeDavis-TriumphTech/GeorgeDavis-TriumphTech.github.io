<script>
  var codeBlocks = document.querySelectorAll('pre code');

  codeBlocks.forEach((codeBlock, index) => {
    // console.log(`The index for ${codeBlock} is ${index}`)
    let copyButton = document.createElement('button');
    copyButton.id = index;
    copyButton.className = 'copy';
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
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>