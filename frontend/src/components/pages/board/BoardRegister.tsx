import React, {FC, FormEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {registerBoard} from "../../../store/actions/boardActions";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import {useHistory} from "react-router-dom";
import Textarea from "../../UI/Textarea";
import Message from "../../UI/Message";
import {setError} from "../../../store/actions/pageActions";


const BoardRegister: FC = () => {
    let history = useHistory()
    const {user} = useSelector((state: RootState) => state.auth);
    const {error, submitted} = useSelector((state: RootState) => state.page);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        return () => {
            if (error) {
                dispatch(setError(''));
            }
        }
    }, [error, dispatch]);

    useEffect(() => {
        if(submitted){
            history.push('/')
        }
    }, [submitted, history]);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        if (error) {
            dispatch(setError(''));
        }
        setLoading(true);
        if (user) {
            dispatch(registerBoard({title, content}, user, () => setLoading(false)));
        }
    }

    return (
        <section>
            <div className="container">
                <h2 className="has-text-centered is-size-2 mb-3">Register</h2>
                <form className="form" onSubmit={submitHandler}>
                    {error && <Message type="danger" msg={error} />}
                    <Input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e)=> setTitle(e.currentTarget.value)}
                        placeholder="Title here"
                        label="title"
                    />
                    <Textarea
                        className="is-primary is-medium"
                        name="content"
                        value={content}
                        onChange={(e)=> setContent(e.currentTarget.value)}
                        placeholder="Content here"
                        label="content"
                    />
                    <Button text={loading ? "Loading..." : "등록"} className="is-primary is-fullwidth mt-5" disabled={loading} />
                </form>
            </div>
        </section>
    )
}

export default BoardRegister
