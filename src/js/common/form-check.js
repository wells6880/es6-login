const rules = {
    present: (v) => {
        if(!v){
            return {
                type: 'present',
                message: '必填'
            };
        }
    }
};

const check = (form) => {
    const elements = form.elements;
    // console.log(elements);
    // console.log(Array.from(elements));
    Array.from(elements).filter((element) => {
        return element.getAttribute('valid');
    }).map( item => {
        // console.log(item, 'map');
        const valids = item.getAttribute('valid').split(',');
        valids.forEach( vaild => {
            if(rules[vaild]){
                const result = rules[vaild](item.value);

            }
        })
    })
};

export {
    check
}