### deploy

1. at project root.

  `middleman build`

2. go to build directory

  `cd tmp/`

3. add

  `git add -A`

4. commit

  `git commit -m build`

5. push to github.

  `git push origin gh-pages`

  `git push -u origin gh-pages #(if first push ever.)`

or

add to profile:

`alias mmdeploy="middleman build && cd tmp/ && git add -A && git commit -m build && git push origin gh-pages && cd .."`
