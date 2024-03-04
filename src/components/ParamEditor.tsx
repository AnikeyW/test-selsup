'use client'
import React, {ChangeEvent, Dispatch, FC, SetStateAction, useState} from 'react';
import {Model, Param} from "@/types";

interface Props {
    params: Param[];
    model: Model;
}

const ParamEditor:FC<Props> = ({params = [], model}) => {
    const [editedModel, setEditedModel] = useState<Model>({...model})
    const [modelPreview , setModelPreview] = useState('')

    const getModelHandler = () => {
        console.log(editedModel)
        setModelPreview(JSON.stringify(editedModel))
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px'}}>
            {params.map(param => (
                <Param param={param} key={param.id} model={editedModel} setModel={setEditedModel}/>
            ))}

            <button onClick={getModelHandler}>Get Model</button>
            <div>{modelPreview}</div>
        </div>
    );
};

export default ParamEditor;

interface IParamProps{
    param: Param
    model: Model
    setModel: Dispatch<SetStateAction<Model>>
}

const Param :FC<IParamProps> = ({param, model, setModel}) => {

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        const updatedParamValues = model.paramValues.map(paramValue =>
            paramValue.paramId === param.id ? { ...paramValue, value: inputValue } : paramValue
        );
        setModel({ ...model, paramValues: updatedParamValues });
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>{param.name}</span>
            {param.type === "string" &&
                <input
                    type="text"
                    value={model.paramValues.find(paramValue => paramValue.paramId === param.id)?.value }
                    onChange={changeHandler}
                />
            }
        </div>
    )
}