module.exports=function(s){require("load-grunt-tasks")(s);var a;s.initConfig({pkg:s.file.readJSON("package.json"),concat:{dist:{src:["source/_base.css","source/**/*.css"],dest:"animate-eb9a51bc.css"}},autoprefixer:{options:{browsers:["last 2 versions","bb 10"]},no_dest:{src:"animate-eb9a51bc.css"}},cssmin:{minify:{src:["animate-eb9a51bc.css"],dest:"animate.min-0a10c6dd.css"}},watch:{css:{files:["source/**/*","animate-config.json"],tasks:["default"]}}}),a=function(){var a,e,n,t=s.file.readJSON("animate-config.json"),i=["source/_base.css"],c=0;for(a in t)if(t.hasOwnProperty(a)){e=t[a];for(n in e)e.hasOwnProperty(n)&&e[n]&&(i.push("source/"+a+"/"+n+".css"),c+=1)}s.log.writeln(c?c+(c>1?" animations":" animation")+" activated.":"No animations activated."),s.config("concat",{"animate-eb9a51bc.css":i}),s.task.run("concat")},s.registerTask("concat-anim","Concatenates activated animations",a),s.registerTask("default",["concat-anim","autoprefixer","cssmin"]),s.registerTask("dev",["watch"])};