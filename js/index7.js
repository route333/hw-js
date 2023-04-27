const max = 55;

if (max >= 0 && max <= 16) {
    const group = alert("максим відноситься до групи діти");
} else if (max >= 17 && max <= 60) {
    const group = alert("максим відноситься до групи дорослі");
} else if (max >= 61 && max <= 100) {
    const group = alert("максим відноситься до групи пенсіонери");
}
console.log(max);

