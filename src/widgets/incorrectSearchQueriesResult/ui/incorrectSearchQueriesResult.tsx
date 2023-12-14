import React from "react";
import {Button, Result} from "antd";
import {Link} from "react-router-dom";

export const IncorrectSearchQueriesResult: React.FC = () => {

    return (
        <Result
            status="error"
            title="Incorrect search query"
            subTitle="Please do not change search parameters like '?page=1'"
            extra={
            <Link to="/">
                <Button type="primary">
                    Go to home page
                </Button>
            </Link>
            }
        />
    )
}
