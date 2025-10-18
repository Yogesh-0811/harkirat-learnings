interface PageProps{
    params:{
        catchIds?: string[];
    };
}

export default function Catch({params}:PageProps){
    return <div>
        {JSON.stringify(params.catchIds)}
    </div>
}