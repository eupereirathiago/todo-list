import { styled } from "styled-components";
import Header from "../../components/Header";
import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import { useForm } from "react-hook-form";
import { useBuscarCategorias, useBuscarTarefas, useCriarTarefa } from "../../hook/hookTarefas";
import { Dropdown } from 'primereact/dropdown';
        

const HeaderContainer = styled.section ``;



const Home = () => {

    const [visibleDialog, setVisibleDialog] = useState(false);
    const [categoria, setCategoria] = useState();
    const{ register, handleSubmit, reset, formState: { erros }, setValue} = useForm();

    const {data: categorias} = useBuscarCategorias();
    const {data: tarefas, isFetched} = useBuscarTarefas();
    const {mutateAsync: handleCriar} = useCriarTarefa();

    const criarTarefa = (dados) => {
        handleCriar(dados);
    }


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
                <ul>
                    {
                        
                    }
                </ul>

            </div>
            <Dialog
            visible={visibleDialog}
            onHide={() => setVisibleDialog(false)}
            header="Criar tarefa"
            >
                <form 
                onSubmit={handleSubmit(criarTarefa)} 
                className="flex flex-column gap-3">
                    
                    <InputText
                        placeholder="Titulo"
                        {...register("titulo", {required:true})}
                    />
                    <InputTextarea placeholder="Descreva a tarefa" 
                        {...register("descricao")}
                    />
                    <Dropdown
                        value={categoria}
                        options={categorias}
                        placeholder="Escolha uma categoria"
                        optionLabel="nome"
                        optionValue="id"
                        onChange={(e) => {
                            setValue("categoria", e.value);
                            setCategoria(e.value);
                        }}

                    />

                    <Button type="subimit" label="Criar"/>

                </form>
            </Dialog>
        </HeaderContainer>
     );
}
 
export default Home;