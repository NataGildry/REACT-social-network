import React, {ChangeEvent, FC, useEffect, useState} from 'react';

type PropsType = {
    status: string | null
    updateUserStatus: (status:string) => void
};

const StatusWithHooks: FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode && (<div>
                <b><span onDoubleClick={activateEditMode}>{props.status || "------"}</span></b>
            </div>)
            }
            {editMode && (<div>
                <input onChange={onStatusChange} autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </div>)
            }
        </div>
    );
};

export default StatusWithHooks;
