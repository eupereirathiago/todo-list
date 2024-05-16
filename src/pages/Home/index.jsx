import { styled } from "styled-components";
import Header from "../../components/Header";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';

const HeaderContainer = styled.section ``;


const Home = () => {
    const [visibleDialog, setVisibleDialog] = useState(false);

    return ( 
        <HeaderContainer>
            <Header/>
            <div className="p-6">
                <h1 className="flex justify-content-between align-items-center">
                    Minhas tarefas
                    <Button
                        label="Nova Tarefa" 
                        icon="pi pi-plus"
                        onClick={() => setVisibleDialog(true)}
                    />
                </h1>

            </div>
            <Dialog
            visible={visibleDialog}
            onHide={() => setVisibleDialog(false)}
            header="Criar tarefa"
            >
                <form className="flex flex-column gap-3">
                
                    <InputText
                        placeholder="Titulo"
                    />
                    <InputTextarea placeholder="Descreva a tarefa"/>
                    <Button type="subimit" label="Criar"/>

                </form>
            </Dialog>
        </HeaderContainer>
     );
}
 
export default Home;