import React from 'react';
import classes from './Settings.module.css';
import profile from './assets/human.png'; // use your image path
import camera from './assets/camera.png';   // use your camera icon

const Settings = () => {
    return (
        <div className={classes.settings}>
            <div>
                <div className={classes.tabs}>
                    <button className={`${classes.tab} ${classes.active}`}>Personal</button>
                    <button className={classes.tab}>Payments</button>
                </div>
                <div>
                    <button className={classes.editBtn}>Edit Details</button>
                </div>
            </div>

            <div className={classes.card}>
                <h3 className={classes.sectionHeader}>Personal information</h3>
                <p className={classes.subtext}>Update your photo and personal details here.</p>

                <div className={classes.avatarWrapper}>
                    <img src={profile} alt="User" className={classes.avatar} />
                    <img src={camera} alt="Camera" className={classes.cameraIcon} />
                </div>

                <div className={classes.inputRow}>
                    <div className={classes.inputGroup}>
                        <label>First name</label>
                        <input type="text" placeholder="Toluwani" />
                    </div>
                    <div className={classes.inputGroup}>
                        <label>Last name</label>
                        <input type="text" placeholder="Adekoya" />
                    </div>
                </div>

                <div className={classes.inputRow}>
                    <div className={classes.inputGroup}>
                        <label>Email address</label>
                        <input type="text" placeholder="adekoyatoluwani5@gmail.com" />
                    </div>
                    <div className={classes.inputGroup}>
                        <label>Phone number</label>
                        <input type="text" placeholder="070 1798 1231" />
                    </div>
                </div>

            </div>

            <div className={classes.card2}>
                <div>
                    <h3 className={classes.sectionHeader}>Password</h3>
                    <p className={classes.subtext}>Please enter your current password to change your password.</p>
                    <button className={classes.saveBtn}>Change Password</button>
                </div>
                <div className={classes.inputRow}>
                    <div className={classes.inputGroup}>
                        <label>Current password</label>
                        <div className={classes.inputGroup2}>
                            <p>Your current password is needed to <br />proceed</p>
                            <div className={classes.inputGroup2nd}>
                                <input type="password" placeholder="Input Password" />
                            </div>
                        </div>
                    </div>
                    <div className={classes.inputGroup}>
                        <label>New password</label>
                        <div className={classes.inputGroup2}>
                            <p>Input the new password you want to be  <br />using </p>
                            <div className={classes.inputGroup2nd}>
                                <input type="password" placeholder="Input Password" />
                            </div>
                        </div>
                    </div>
                    <div className={classes.inputGroup}>
                        <label>Confirm password</label>
                        <div className={classes.inputGroup2}>
                            <p>Confirm your password to proceed with <br /> the xhange</p>
                            <div className={classes.inputGroup2nd}>
                                <input type="password" placeholder="Input Password" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
