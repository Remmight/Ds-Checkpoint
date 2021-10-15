function findDistinctElements(setOne,setTwo) {
    console.log("Set 1: " + Arrays.toString(setOne) + ", Set 2: " + Arrays.toString(setTwo));
    /*Map<Integer, Integer>*/ map = new HashMap();

    for (var i = 0; i < setOne.length ; i++) {
        var element = setOne[i];
        if(map.containsKey(element)) {
            var count = map.get(element);
            map.put(element, count+1);
        }else
            map.put(element, 1);
    }

    for (var i = 0; i <setTwo.length ; i++) {
        var element = setTwo[i];
        if(map.containsKey(element)) {
            var count = map.get(element);
            map.put(element, count+1);
        }else
            map.put(element, 1);
    }

    //get sum of distinct elements
    let sum = 0;
    /*Set<Integer>*/ set = map.keySet();
    /*Iterator<Integer>*/ iterator = set.iterator();
    while (iterator.hasNext()){
        var key = iterator.next();
        if(map.get(key)==1)
            sum += key;
    }

    console.log("Distinct Elements Sum : " + sum);
    }

    /*public static void*/ main(String[] args) {
        var  setOne = {3, 1, 7, 9};
        var  setTwo = {2, 4, 1, 9, 3};
        findDistinctElements(setOne, setTwo);
    }
}