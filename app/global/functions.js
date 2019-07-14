import global from './../global/constants';

export const callApiByGet = async ({token, path}) => {
    try {
        let response = await fetch(
            global.API_URL+path,
            {
                method: 'GET',
                headers: new Headers({ 
                    Authorization: 'Bearer '+token 
                }) 
            });

            let respJson = await response.json();

            if (response.ok) {
                return {success: true, data: respJson.data};
            } else {
                throw respJson.message;
            }
                                            
    } catch (err) {
        console.log(err);
        return {sucess: false, errMsg: err};
        // err log 기록
        // error 모니터링 rollbar 검토중
    }
}

export const callApiByPost = async ({param, path}) => {

    try {
        let response = await fetch(
            global.API_URL+path,
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(param)
            });

        let respJson = await response.json();

        if (response.ok) {
            return {success: true, token: respJson.data.token};
        } else {
            throw respJson.message;
        }

    } catch (error) {
        console.log(error);
        return {sucess: false, errMsg: error};
        // err log 기록
        // error 모니터링 rollbar 검토중
    }
}

export const callApiByPut = async ({token, param, path}) => {
    
    try {
        let response = await fetch(
            global.API_URL+path,
            {
                method: 'PUT',
                headers: new Headers({ 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer '+token 
                }),
                body: JSON.stringify(param)
            });
        
        let respJson = await response.json();

        if (response.ok) {
            return {success: true, token: respJson.data.token};
        } else {
            throw respJson.message;
        }

    } catch (error) {
        console.log(error);
        return {sucess: false, errMsg: error};
        // err log 기록
        // error 모니터링 rollbar 검토중
    }
}