function filterXXX(){for(var e=document.getElementById("myTable"),t=document.getElementById("myInput").value,n=e.getElementsByTagName("tr"),l=document.getElementById("displayResults"),a=0;a<n.length;a++){var s=n[a],m=s.getElementsByTagName("th")[0];(m.textContent||m.innerText).toUpperCase().indexOf(t.toUpperCase())>-1?s.style.display="":s.style.display="none",l.innerHTML="Results for: "+t}}