import React, { useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import {BsBuilding} from "react-icons/bs";
import Select from "react-select";

function AddPerson(props) {
    const FormGroup = styled.div`
       margin-bottom:10px
    `
    const Label = styled.label`
    color: #434547;
      font-size:14px;
      font-weight:500;
    `
    const TextInputBox = styled.div`
    display: flex;
    align-items:center;
    gaps:0.7em;
    height: 28px;
    border-radius:3px;
    width:100%;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    margin-top:5px;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    `
    const TextInput = styled.input`
     flex:1;
     border:none !important;
     background: none !important;
     padding-left:5px;
     &:focus{
         outline:none !important;
     }
    `
    const Icon = styled.div`
       padding-left:5px;
       height:100%;
       display:flex;
       justify-content:center;
       align-items:center;
    `

    const LabelBox = styled.div`
     margin-bottom:"5px";
    `

    const colourStyles = {
        control: (styles) => ({
          ...styles,
          backgroundColor: "#fff",
          height:"28px !important",
          minHeight: "28px !important",
          lineHeight:"28px !important",
          width: "100%",
          borderBottomLeftRadius:"3px !important",
          borderTopLeftRadius:"3px !important",
          borderBottomRightRadius:"3px !important",
          borderTopRightRadius:"3px !important",
          border: "1px solid #ced4da !important",
          fontSize:"13.3333px !important",
        }),
      };
      const [selectInput, setSelectInput] = useState("");
      const instantLables = [
        {
          options: [
            { label: "false", value: false },
            { label: "true", value: true },
          ]
        }
      ];
      const handleSelectGroup = selectedGroup => {
        setSelectInput({ selectedGroup });
      };

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

      return (
        <form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <TextInputBox>
            <TextInput
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </TextInputBox>
        </FormGroup>

        <FormGroup>
        <Label htmlFor="lastName">Last Name</Label>
        <TextInputBox>
        <TextInput
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        </TextInputBox>
        </FormGroup>


        <FormGroup>
        <Label htmlFor="Position">Position</Label>
        <TextInputBox>
        <TextInput
          id="Position"
          name="Position"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Position}
        />
        </TextInputBox>
        </FormGroup>

       <FormGroup>
       <Label htmlFor="Label">Label</Label>
       <Select styles={colourStyles}
                            value={selectInput.selectedGroup}
                            onChange={handleSelectGroup}
                            options={instantLables}
                            isMulti={false}
                            isSearchable={false}
                          />

       </FormGroup>
        <FormGroup>
        <Label htmlFor="Organization">Organization</Label>
        <TextInputBox>
        <Icon>
        <BsBuilding />
        </Icon>
    
        <TextInput
          id="Organization"
          name="Organization"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Organization}
        />
        </TextInputBox>
        </FormGroup>

        <FormGroup>
        <Label htmlFor="CellPhone">Cell Phone</Label>
        <TextInputBox>
        <TextInput
          id="CellPhone"
          name="CellPhone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.CellPhone}
        />
        </TextInputBox>
        </FormGroup>


        <FormGroup>
        <Label htmlFor="OtherPhone">Other Phone</Label>
        <TextInputBox>
        <TextInput
          id="OtherPhone"
          name="OtherPhone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.OtherPhone}
        />
        </TextInputBox>
        </FormGroup>

        <FormGroup>
        <Label htmlFor="Email">Email</Label>
        <TextInputBox>
        <TextInput
          id="Email"
          name="Email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Email}
        />
        </TextInputBox>
        </FormGroup>

        <FormGroup>
       <Label htmlFor="Owner">Owner</Label>
       <Select styles={colourStyles}
                            value={selectInput.selectedGroup}
                            onChange={handleSelectGroup}
                            options={instantLables}
                            isMulti={false}
                            isSearchable={false}
                          />

       </FormGroup>

       <FormGroup>
       <Label htmlFor="Visible">Visible to</Label>
       <Select styles={colourStyles}
                            value={selectInput.selectedGroup}
                            onChange={handleSelectGroup}
                            options={instantLables}
                            isMulti={false}
                            isSearchable={false}
                          />

       </FormGroup>
       
      </form>
      );
    };
export default AddPerson;