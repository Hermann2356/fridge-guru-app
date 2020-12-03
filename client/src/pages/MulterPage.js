import React from "react";

function ImageInput(props) {

    const handleImageUpload = event => {
        const files = event.target.files
        console.log(files);
        const formData = new FormData();
        formData.append('profileImg', files[0]);

        fetch('/api/profile/photo/' + props.userId , {
            method: 'PUT',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

        return (
            <form enctype="multipart/form-data" method="put" name="fileInfo">
                <input type="file"  onChange={handleImageUpload} accept="image/*"/>
            </form>

        );
}

class MulterPage extends React.Component {

    render() {
        return(
            <ImageInput userId={1} />
        );
    }
}

export default MulterPage;